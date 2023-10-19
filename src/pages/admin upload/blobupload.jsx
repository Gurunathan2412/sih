import { BlobServiceClient } from "@azure/storage-blob";
// /**
//  *
//  * @param {file} file
//  * @param {string} containerName
//  *
//  * @returns {string} fileString
//  */

async function fileUpload(file, containerName) {
  console.log(file)
  try {
    const blobServiceClient =  new BlobServiceClient(
      'https://srininew.blob.core.windows.net/?sp=racwdl&st=2023-09-22T09:04:47Z&se=2023-09-25T17:04:47Z&sv=2022-11-02&sr=c&sig=q7R%2BIwYVaPUj2Py0HuTQS%2B08dbPO%2BjeKWzJJpPt0P2Q%3D'
      );
    const containerClient = blobServiceClient.getContainerClient(
      'powergptdocs'
    );

    // const options = {
    //   blobHTTPHeaders: {
    //     blobContentType: file[0].file.type,
    //   },
    // };
    let res=""
    if (file) {
      const blobName = file[0].filename;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      blockBlobClient._name=blobName
      console.log(blockBlobClient)
      
     res=await blockBlobClient.uploadBrowserData(file[0].file);
 

    }
    // const res = await blobClient.uploadBrowserData(file[0].file, options);

    if (res) {
      const fileString = `https://${'srininew'}.blob.core.windows.net/${'powergptdocs'}/${file[0].file.name}`;
      console.log('File uploaded successfully');

      return fileString;
    }
  } catch (error) {
      console.log(error)
      console.error('Error uploading file:', error);

    throw Error("Error uploading file to Azure");
  }
}

export { fileUpload };




