import React, { useState } from "react";
import { Form, Upload as UploadAnt } from "antd";
import Button from "../../atoms/Button";
import UploadIcon from "../../../svgs/upload.svg";
import {
  FileAddOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadDocument } from "../../../utils/api/uploadDocuments";
import { motion } from "framer-motion";

const Upload = ({
  name,
  label,
  number,
  index,
  setDocuments,
  uploadList,
  allowedFileTypes,
}) => {
  const [loading, setLoading] = useState(false);

  const onUpload = async ({ file, onSuccess, onError }) => {
    if (number === 1 && uploadList.length == 1) {
      toast.error(
        'Maximum 1 file can be uploaded'
      );
      return;
    }

    const isAllowedType = allowedFileTypes.includes(file.type);
    if (!isAllowedType) {
      const fileExtensionsString = allowedFileTypes
        .map((fileType) => {
          const parts = fileType.split("/");
          return parts[1];
        })
        .join(", ");
      toast.error(`You can only upload ${fileExtensionsString} files!`);
      return;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      toast.error("File must be smaller than 2MB!");
      return;
    }

    try {
      setLoading(true);
      const response = await uploadDocument(file, name, (uploadList.length + 1), number);
      onSuccess();
      setDocuments((prev) => {
        const array = prev[name];
        array.push({ name: file.name, url: response.data, status: "done" });
        return {
          ...prev,
          [name]: array,
        };
      });

      setLoading(false);
    } catch (error) {
      onError();
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="inline-block w-full">
      <Form.Item
        label={
          <h5>
            <span className="mr-3">{index + 1}.</span>
            {label}
          </h5>
        }
        required
        labelCol={{ span: 16 }}
        labelAlign="left"
      >
        <UploadAnt
          disabled={loading}
          customRequest={onUpload}
          maxCount={number}
          showUploadList={false}
        >
          <Button
            varient={"primary"}
            color={"blue"}
            className={
              "px-2 py-1 rounded-[5px] text-xs text-white font-medium flex justify-center gap-x-1 items-center"
            }
          >
            <img src={UploadIcon} alt="upload icon" className="w-3" />
            Upload
            {loading && <LoadingOutlined className="ml-2" />}
          </Button>
        </UploadAnt>
      </Form.Item>
      {uploadList.length > 0 && (
        <div className="mb-4 border p-2 rounded-lg">
          {uploadList.map(({ name: fileName, url }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="group hover:bg-gray-100 px-2 py-1 flex justify-between items-center rounded-md"
              key={`${name}_${index}`}
            >
              <span>
                <FileAddOutlined className="mr-2" />
                <Link to={url} target="_blank" className="hover:text-blue-800">
                  {" "}
                  {fileName}
                </Link>
              </span>
              <DeleteOutlined
                className="hidden group-hover:block cursor-pointer hover:text-blue-800"
                onClick={() => {
                  uploadList.splice(index, 1);
                  setDocuments((prev) => {
                    return { ...prev, [name]: uploadList };
                  });
                }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upload;
