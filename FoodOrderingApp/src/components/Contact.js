const Contact = () => {
  return (
    <div className="contact-us text-center">
      <h1 className="mt-4 font-bold">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="p-1 m-2 border border-black rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="p-1 m-2 border border-black rounded-lg"
        ></input>
        <button className="p-1 m-2 border border-black bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
