import React from "react";
import { ReactComponent as SideCorner } from "../../../assets/svgs/sideCorner.svg";

const TableData = ({ children, style }) => {
  let content = children;

  if (typeof children === "string") {
    const words = children.split(" ");
    if (words.length > 3) {
      content = words.map((word, index) => {
        if (index > 0 && index % 3 === 0) {
          return (
            <React.Fragment key={index}>
              <br />
              {word}{" "}
            </React.Fragment>
          );
        } else {
          return <React.Fragment key={index}>{word} </React.Fragment>;
        }
      });
    } else {
      content = words.map((word, index) => (
        <React.Fragment key={index}>{word} </React.Fragment>
      ));
    }
  } else if (React.isValidElement(children)) {
    content = children;
  }

  return (
    <td className={`text-sm font-normal h-14 ${style} underline break-words`}>
      <div className="flex">{content}</div>
    </td>
  );
};

const TableRow = ({ children, shadow }) => {
  const shadowClasses = shadow ? "shadow-md" : "";

  return (
    <tr className={`relative`}>
      {children}
      {shadow && (
        <>
          <div className={`absolute left-0 right-0 bottom-0 h-1 shadow-md `} />

          <div
            className={`absolute right-0 bottom-0 w-1 h-1  rounded-full shadow-md`}
          />
          <div className="absolute right-0 py-2 bottom-0 mr-1 mb-1">
            <SideCorner />
          </div>
        </>
      )}
    </tr>
  );
};

const TableHeader = ({ data }) => {
  return (
    <thead>
      <TableRow>
        {data.map((item, index) => (
          <th key={`table-head-${index}`} className="pb-1 text-xs font-bold">
            <div className="flex w-full">
              <div>{item}</div>
            </div>
          </th>
        ))}
      </TableRow>
    </thead>
  );
};

const TableBody = ({ data, bottomLine }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <TableRow
          key={`table-row-${rowIndex}`}
          bottomLine={bottomLine ? true : rowIndex + 1 !== data.length}
          shadow
        >
          {row.map((item, index) => (
            <TableData
              key={`table-data-${index}`}
              style={typeof item !== "string" && { justifyContent: "center" }}
            >
              {typeof item === "string"
                ? item
                : React.cloneElement(item, {
                    height: item.props.height,
                    width: item.props.width,
                  })}
            </TableData>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

const ShadowTable = ({ headers, rows }) => {
  return (
    <table className="w-full">
      <TableHeader data={headers} />
      <TableBody data={rows} bottomLine />
    </table>
  );
};

export default ShadowTable;
