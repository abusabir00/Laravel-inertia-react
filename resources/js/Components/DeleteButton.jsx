import React from "react";
import Swal from "sweetalert2";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Link, router} from '@inertiajs/react';


const DeleteButton = ({ itemId, url, text }) => {
    console.log(itemId, url, text);
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(url);
        // Send DELETE request to Laravel
        router.delete(route(url, itemId));
      }
    });
  };

  return (
    <Link onClick={handleDelete}>
        <TrashIcon className="w-5 h-5 text-gray-500" />
    </Link>
  );
};

export default DeleteButton;
