"use client";

import Form from "@/components/Form/Form";

function EditPage() {
  return (
    <div>
      <Form buttonText="Save Post" onSubmit={() => console.log("submitted")} />
    </div>
  );
}

export default EditPage;
