const sidebarIcon = document.getElementById("sidebar");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.getElementById("close");
sidebarIcon.addEventListener("click",() => sidebar.classList.add("active") );

sidebarClose.addEventListener("click" , () => sidebar.classList.remove("active"));






// Get preview elements
const preview = document.getElementById("previewPopup");
const previewImg = document.getElementById("previewImg");
const previewName = document.getElementById("previewName");
const previewDesc = document.getElementById("previewDesc");
const previewPrice = document.getElementById("previewPrice");
const closePreview = document.getElementById("closePreview");

// Show preview function
function showPreview(item) {
  previewImg.src = item.dataset.img;
  previewName.textContent = item.dataset.name;
  previewDesc.textContent = item.dataset.desc;
  previewPrice.textContent = item.dataset.price + " EGP";

  preview.classList.remove("hidden");

  // ❗ هنا نوقف حركة الخلفية
  document.body.style.overflow = "hidden";
}

// غلق المعاينة
closePreview.onclick = () => {
  preview.classList.add("hidden");

  // ❗ هنا نرجّع الحركة عادي
  document.body.style.overflow = "auto";
};
