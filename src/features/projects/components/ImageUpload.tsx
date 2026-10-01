"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Project Image
      </label>

      <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
        Choose Image

        <input
          name="image"
          type="file"
          accept="image/*"
          required
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setFileName(file.name);
            } else {
              setFileName("");
            }
          }}
        />
      </label>

      {fileName ? (
        <p className="mt-2 text-sm font-medium text-green-600">
          Selected file: {fileName}
        </p>
      ) : (
        <p className="mt-2 text-xs text-slate-400">
          JPG, PNG, WEBP, or other image formats.
        </p>
      )}
    </div>
  );
}