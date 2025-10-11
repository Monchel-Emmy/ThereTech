// add metadata
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords, url }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
    {url && <meta property="og:url" content={url} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="website" />
  </Helmet>
);

export default Meta;

