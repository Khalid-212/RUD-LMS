import React, { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [supabaseUrl, setSupabaseUrl] = useState(
    "https://yowdzcszgmmoftgqtahz.supabase.co/storage/v1/object/profilepictures"
  );
  // "https://yowdzcszgmmoftgqtahz.supabase.co/storage/v1/object/profilepictures",
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (event) => setFile(event.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(`${supabaseUrl}/storage/public/files`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(res.statusText);
    } catch (error) {
      console.error(error);
      setUploadError(error);
    }
  };

  return (
    <div>
      {uploadError && <div>{uploadError}</div>}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;

// import React, { useState } from "react";

// function FileUploader() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch(
//         "https://yowdzcszgmmoftgqtahz.supabase.co/storage/v1/object/profilepictures",
//         {
//           method: "POST",
//           body: formData,
//           mode: "no-cors",
//         }
//       );

//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       alert("File uploaded successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("File upload failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileUploader;
