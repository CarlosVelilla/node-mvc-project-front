import React, { useState } from "react";
import Dropzone from "react-dropzone";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";
import axios from "axios";
// import { propsToClassKey } from "@mui/styles";

const UploadImages = (props) => {
  const [images, setImages] = useState([]);
  const onDrop = (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);

    axios.post("/api/book/uploadImage", formData, config).then((response) => {
      if (response.data.success) {
        setImages([...images, response.data.image]);
        props.refreshFunction([...images, response.data.image]);
      } else {
        alert("Fail to upload");
      }
    });
  };
  return (
    <>
      <Dropzone multiple={false} maxSize={800000} onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "220px",
              height: "160px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}
            <input {...getInputProps()} />
            <PlusOneRoundedIcon style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "220px",
          height: "160px",
          overflowX: "scroll",
        }}
      >
        {/* {images.map((image, index) => (
                  <div onClick={() => onDelete(image)}>
                    <img
                      style={{
                        minWidth: "300px",
                        width: "220px",
                        height: "160px",
                      }}
                      src={`http://localhost:4000/${image}`}
                      alt={`productImg-${index}`}
                    />
                  </div>
                ))} */}
      </div>
    </>
  );
};

export default UploadImages;
