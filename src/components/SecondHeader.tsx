'use client'
import React, { useState, useEffect } from 'react';

const SecondHeader: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const icon = document.getElementById("icon") as HTMLElement;
    const saveText = document.getElementById("savetext") as HTMLElement;
    
    const savedState = localStorage.getItem("isSaved") === "true";
    setIsSaved(savedState);

    if (savedState) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      saveText.textContent = "Saved";
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      saveText.textContent = "Save";
    }
  }, [isSaved]);

  // Handle saving state
  const handleSaveClick = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    localStorage.setItem("isSaved", newSavedState.toString());
  };

  // Handle the click event for opening the share modal
  const handleShareClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle copy link functionality
  const handleCopyLink = () => {
    const linkToCopy = "https://example.com";
    navigator.clipboard.writeText(linkToCopy).then(() => {
      const copyTextDiv = document.getElementById("copy-text") as HTMLElement;
      copyTextDiv.textContent = "Link copied!";

      setTimeout(() => {
        copyTextDiv.textContent = "Copy link";
      }, 2000);
    }).catch((error) => {
      console.error("Failed to copy link:", error);
    });
  };

  const saveIconClass = isSaved ? "fa-solid fa-heart" : "fa-regular fa-heart";
  const saveText = isSaved ? "Saved" : "Save";

  return (
    <div>
      <div className="container-heading">
        <div className="container-heading-first-half">
          <a href="#" className="back-link">← See all properties</a>
        </div>
        <div className="container-heading-second-half">
          <div className="share" id="share">
            <a href="#" className="container-heading-second-half-item" onClick={handleShareClick}>
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ fontSize: 'medium', color: 'rgb(8, 14, 49)', marginLeft: '2px' }}
              ></i> 
              <span>Share</span>
            </a>
          </div>

          {isModalOpen && (
            <div id="shareModal" className="modal">
              <div className="modal-content">
                <span>
                  <i className="fa-solid fa-xmark" onClick={handleCloseModal}></i> &nbsp; Share
                </span>
                <div className="modal-container">
                  <div className="property-name">
                    <div className="property-card">
                      <div className="property-image">
                        <img src="images/image1.jpg" alt="Property" />
                      </div>
                      <div className="description">
                        <h2>Juneau Vacation Home: Stunning View + Beach Access</h2>
                        <p>United States of America</p>
                        <p>9.8/10</p>
                      </div>
                    </div>
                  </div>
                  <div className="sharing-platforms">
                    <div className="platform">
                      <div>
                        <i className="fa-solid fa-square-envelope" style={{ color: 'green' }}></i>
                      </div>
                      <div>Messages</div>
                    </div>
                    <div className="platform">
                      <div>
                        <i className="fa-brands fa-whatsapp" style={{ color: 'rgb(76, 189, 76)' }}></i>
                      </div>
                      <div>WhatsApp</div>
                    </div>
                    <div className="platform">
                      <div>
                        <i className="fa-brands fa-facebook-messenger" style={{ color: 'rgb(43, 42, 136)' }}></i>
                      </div>
                      <div>Messenger</div>
                    </div>
                    <div className="platform">
                      <div>
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div>Facebook</div>
                    </div>
                    <div className="platform">
                      <div>
                        <i className="fa-solid fa-x"></i>
                      </div>
                      <div>X-twitter</div>
                    </div>
                    <div className="platform" id="copy-link" onClick={handleCopyLink}>
                      <div>
                        <i className="fa-regular fa-copy" style={{ color: 'rgb(142, 154, 175)' }}></i>
                      </div>
                      <div id="copy-text">Copy link</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="save">
            <a href="#" className="container-heading-second-half-item" id="save" onClick={handleSaveClick}>
              <i
                id="icon"
                className={saveIconClass}
                style={{ fontSize: 'medium', color: 'red', marginLeft: '2px' }}
              ></i> 
              <span id="savetext">{saveText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
