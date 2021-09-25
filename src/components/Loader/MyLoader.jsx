import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={400}
    height={250}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="200" cy="50" r="50" />
    <rect x="0" y="120" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="150" rx="3" ry="3" width="178" height="6" />
    <rect x="150" y="1500" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
);

export default MyLoader;
