import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../utils/api/getAllCategories";
import { Form, Select } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";

const transformData = (data) => {
  return data.map(({ _id, name }) => {
    return { value: _id, label: name };
  });
};

const getSubCategoriesOfCategory = (categories, id,) => {
  const selectedCategory = categories.find((category) => category._id === id);
  return selectedCategory ? selectedCategory.subcategories : [];
};

const CategoryAndSubCategory = ({ 
  form, 
  categories, 
  setCategories, 
  // action , 
  // categoryData
}) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // useEffect(() => {
  //   if (categoryData && categoryData.category_id && categoryData.subcategory_id) {
  //     const initialValues = {
  //       category_id: categoryData.category_id.name,
  //       subcategory_id: categoryData.subcategory_id.name,
  //     };
  //     form.setFieldsValue(initialValues);
  //   }
  // }, [categoryData, form]);

  useEffect(() => {
    (async () => {
      await setSubCategories(
        getSubCategoriesOfCategory(categories, selectedCategory)
      );
      await form.setFieldsValue({
        subcategory_id: undefined,
      });
    })();
  }, [selectedCategory]);

  return (
    <Form.Item
      name="project_type"
      label={"Project Type"}
      required={true}
      labelCol={{ span: 24 }}
      className="mb-0"
    >
      <div className="flex">
        <Form.Item
          className="w-[calc(100%/2)]"
          name={"category_id"}
          rules={[
            {
              required: true,
              message: "Please select category",
            },
          ]}
          wrapperCol={{ span: 22 }}
        >
          <Select
            showSearch
            optionFilterProp="label"
            className="primary_variant"
            suffixIcon={
              <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
            }
            onChange={(e) => setSelectedCategory(e)}
            placeholder={"Category"}
            // disabled={action}
            options={transformData(categories)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 22 }}
          className="w-[calc(100%/2)]"
          name={"subcategory_id"}
          rules={[
            {
              required: true,
              message: "Please select sub-category",
            },
          ]}
        >
          <Select
            showSearch
            optionFilterProp="label"
            onChange={(e) => setSelectedSubCategory(e)}
            className="primary_variant"
            suffixIcon={
              <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
            }
            placeholder={"Sub-Category"}
            // disabled={action}
            options={transformData(subCategories)}
          />
        </Form.Item>
      </div>
    </Form.Item>
  );
};

export default CategoryAndSubCategory;
