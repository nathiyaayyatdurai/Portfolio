import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/Nathiya Resume.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Nathiya A">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>
    </section>
  );
};

export default DownloadResume;
