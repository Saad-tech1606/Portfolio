export default function Modal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">

      <div className="bg-[#111827] p-6 rounded-xl w-[90%] max-w-3xl">
        
        <iframe src={item.pdf} className="w-full h-[400px]" />

        <button onClick={onClose} className="mt-4 bg-primary px-4 py-2 rounded">
          Close
        </button>
      </div>

    </div>
  );
}