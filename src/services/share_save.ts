document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById("icon") as HTMLElement;
    const saveButton = document.getElementById("save") as HTMLElement;
    const saveText = document.getElementById("savetext") as HTMLElement;

    // Check localStorage for the saved state on page load
    const isSaved = localStorage.getItem("isSaved") === "true";

    // Set the initial state based on localStorage
    if (isSaved) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        saveText.textContent = "Saved";
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        saveText.textContent = "Save";
    }

    // Add click event listener to toggle the icon
    saveButton.addEventListener("click", function() {
        // Toggle the icon classes
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        // Toggle the save text
        if (icon.classList.contains("fa-solid")) {
            saveText.textContent = "Saved";
        } else {
            saveText.textContent = "Save";
        }

        // Update localStorage with the new state
        const currentState = icon.classList.contains("fa-solid");
        localStorage.setItem("isSaved", currentState.toString());
    });

    const shareButton = document.getElementById("share") as HTMLElement;
    const modal = document.getElementById("shareModal") as HTMLElement;
    const closeModal = document.getElementById("closeModal") as HTMLElement;

    // Open the modal when share button is clicked
    shareButton.addEventListener("click", function(event: Event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    document.getElementById("copy-link")?.addEventListener("click", function() {
        const linkToCopy = "https://example.com";

        // Copy the link
        navigator.clipboard.writeText(linkToCopy).then(function() {
            const copyTextDiv = document.getElementById("copy-text") as HTMLElement;
            copyTextDiv.textContent = "Link copied!";

            // Reset the text after a short delay
            setTimeout(function() {
                copyTextDiv.textContent = "Copy link";
            }, 2000);
        }).catch(function(error: Error) {
            console.error("Failed to copy link:", error);
        });
    });
});
