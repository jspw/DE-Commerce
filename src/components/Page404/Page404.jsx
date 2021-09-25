import PageNotFoundIcom from "../../assets/images/404.png";
export default function Page404() {
  return (
    <div className="flex flex-col justify-around items-center space-y-4 p-10">
      <img src={PageNotFoundIcom} />
      <div className="text-4xl">404 ERROR</div>
      <div className="text-gray-500">
        We could not find the page you are looking for
      </div>
    </div>
  );
}
