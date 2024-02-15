"use client"

import Form from "@/components/Form/Form";
function CreatePage() {
   return (
     <div>
       <Form buttonText="Create Post" onSubmit={() => console.log("submitted")} />
     </div>
   );
}

export default CreatePage;


