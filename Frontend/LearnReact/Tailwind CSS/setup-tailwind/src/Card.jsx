export default function Card() {
  return (
    <>
      <div className="mt-20 mx-60 flex flex-wrap rounded-lg border-2 border-black">
        <div className="w-full h-14 bg-linear-to-t from-sky-500 to-indigo-500 text-white flex justify-center items-center h-20 font-bold  rounded-t ">
          News You Can Trust
        </div>
        <div className="w-full text-center mt-6">
          <h3 className="text-lg font-semibold ">
            Stay up to date with the Latest!
          </h3>
          <p>
            Subscribe to our newsletter for the latest news straight into your
            inbox
          </p>
          <form className="flex flex-wrap ">
            <input
              type="text"
              placeholder="your@example.com"
              className="w-full text-center mx-52 bg-slate-200 placeholde: text-sm my-4 py-2 rounded"
            />
            <button className="w-full bg-blue-500  mx-52 my-3 py-2 text-white rounded-full">
              Subscribe Now
            </button>
          </form>

          <p className="mt-4 my-6 text-sm">We value your privacy</p>
        </div>
      </div>
    </>
  );
}
