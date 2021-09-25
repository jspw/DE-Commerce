import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div className="bg-gray-600 pt-10 mt-4 w-full">
      <div className="flex flex-row p-2 justify-around items-baseline text-white  space-y-4 xs:flex-col sm:flex-col">
        <div>
          <p className="font-medium pb-4">Dynamic E Commerce Innovators Ltd.</p>
          <p>House 177, Lane 2, New DOHS</p>
          <p>Mohakhali, Dhaka 1206, Bangladesh</p>
        </div>
        <div>
          <p className="font-medium pb-4">Contact Us</p>
          <p>Dhaka Office: +88017300-374-00</p>
          <p>Telephone: +88-02-9887041</p>
          <p>USA Office: 404-287-0730</p>
          <p>Email: info@DSinnovators.com</p>
        </div>
        <div>
          <p className="font-medium pb-4">Find Us</p>
          <a href="https://www.facebook.com/DynamicSolutionInnovators/">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/the-dynamic-solution-innovators/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className=" bg-gray-900 text-center font-semibold font-serif text-white p-4 items-center">
        © 2021 Dynamic E Commerce Innovators Ltd.
      </div>
    </div>
  );
}
