function Contact() {
  return (
    <div className="flex h-full">
      <div className="flex-1  flex items-center justify-center">
        <img
          className="h-96 w-68"
          src="https://www.infront.co/adobe/dynamicmedia/deliver/dm-aid--7e905512-25a1-4972-afeb-a02b15665c9d/portfolio-woman-image.jpg?preferwebp=true&quality=80"
        />
      </div>
      <div className="flex-[3] pl-6 bg-slate-300">
        <div className="flex items-center gap-8 p-8">
          <h1 className="text-2xl ">Get in touch</h1>
          <hr className=" bg-black w-96"></hr>
        </div>
      </div>
    </div>
  );
}
export default Contact;
