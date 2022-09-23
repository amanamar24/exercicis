import { useRef } from "react";
import { GetImageOCR } from "./VisionApiRQ";
// create a react query axios hook to send the base64 image to vision api
export default function VisionApi() {
  //   const { mutate: ImageOCR } = GetImageOCR(); // no need for mutate
  const { isLoading, data } = GetImageOCR();
  const convert = () => {
    const bodyApi = textarea.current.innerHTML;
    console.log({ bodyApi });
    // send bodyApi to visionApi meanwhile showing the isloading state before
    // printing the result in textarea
  };
  /////////////////javascript code
  //   const input = document.getElementById("selectAvatar");
  //   const avatar = document.getElementById("avatar");
  //   const textArea = document.getElementById("textArea");

  //   const convertBase64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(file);

  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };

  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };
  //     });
  //   };

  //   const uploadImage = async (event) => {
  //     const file = event.target.files[0];
  //     const base64 = await convertBase64(file);
  //     avatar.src = base64;
  //     textArea.innerText = base64;
  //   };

  //   input.addEventListener("change", (e) => {
  //     uploadImage(e);
  //   });

  /////////////////javascript code

  const input = useRef(null);
  const avatar = useRef(null);
  const textarea = useRef(null);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const uploadImage = async (event) => {
    const file = event.target.files[0];
    // console.log({ file });
    const base64 = await convertBase64(file);
    // avatar.src = base64; the wrong form to change src in react
    avatar.current.src = base64; // the correct form to change src in react
    // textarea.current.innerText = base64; wrong way
    textarea.current.innerHTML = base64; // correct way
  };
  const handleSubmit = (e) => {
    uploadImage(e);
  };

  //   const handleClick = () => {
  //     alert("you're doing great");
  //   };
  return (
    <>
      <h1>
        VisionApi send an image base64 to vision cloud api by axios react query
        and print the text response
      </h1>
      {/* <div style="margin: 24px;">
        <h2>Upload Image</h2>
      </div> */}

      <div className="">
        <input
          className="form-control form-control-lg m-[16px] p-[16px]"
          id="selectAvatar"
          type="file"
          ref={input}
          onChange={handleSubmit}
        />
        <button
          onClick={convert}
          class=" h-[30px] bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 rounded"
        >
          convert
        </button>
        {/* this button must appear when the textarea is checked a base64 string  */}
        {/* const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

            console.log(base64regex.test("abc"));
            console.log(base64regex.test("U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=")); */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h6>Image Preview:</h6>
            <img
              className="img max-h-[700px] max-w-[700px]"
              id="avatar"
              alt=""
              ref={avatar}
            />
          </div>
          <div className="col">
            <h6>Base64 Output</h6>
            <textarea
              ref={textarea}
              id="textArea"
              rows="30"
              cols="50"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
