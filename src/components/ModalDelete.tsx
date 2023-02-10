interface ModalDeleteProps {
  handleDelete: () => void;
  toggleVisibility: () => void;
}

export function ModalDelete({
  handleDelete,
  toggleVisibility,
}: ModalDeleteProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-grayishblue/60 flex justify-center items-center ">
      <div className="shadow-xl bg-white rounded-md p-6 w-4/5 md:w-1/4 flex-col flex justify-center">
        <h3 className="text-darkblue font-bold">Delete comment</h3>
        <p className="my-4">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex gap-4">
          <button
            onClick={toggleVisibility}
            className="uppercase text-white bg-grayishblue w-full py-2 rounded-md"
          >
            No, cancel
          </button>
          <button
            className="uppercase text-white bg-softred w-full py-2 rounded-md"
            onClick={handleDelete}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}
