document.getElementById('downloadBtn').addEventListener('click',
    function resume() {
   const cvFilePath = 'C:\Users\Hi\OneDrive\Desktop/Soundarapandi S BSc(ECS) 2011 Full-Stack.docx';
   const link = document.createElement('button');
   link.href = cvFilePath;
   link.download = 'Soundarapandi S BSc(ECS) 2011 Full-Stack.docx';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
});

// function downloadResume() {
//     // Specify the URL of the resume file
//     const resumeUrl = "assets\images\Soundarapandi S BSc(ECS) 2011 Full-Stack.pdf";

//     // Create a temporary <a> element to trigger the download
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Soundarapandi.pdf"; // Optional: Specify the filename for the downloaded file
//     document.body.appendChild(link);

//     // Trigger the click event on the <a> element
//     link.click();

//     // Clean up by removing the <a> element from the DOM
//     document.body.removeChild(link);
//   }