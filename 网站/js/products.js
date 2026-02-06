/**
 * 产品中心 - 数据与页面逻辑
 * 与 网站 风格一致，支持列表页与详情页切换
 */

var PRODUCTS_DATA = [
  {
    id: "1",
    title: "Streaming Media Electronic Rearview Mirror System",
    image: "products image/products1.png",
    price: "¥ 999999.00",
    description: "In the field of commercial vehicles (buses, coaches, trucks), the large and tall body structure, combined with the inner wheel difference during turning, creates multiple visual blind spots for drivers. These blind spots pose potential accident hazards. The installation of electronic rearview mirrors can effectively improve driving safety.",
    features: ["HD Display", "AI Warning", "Night Vision", "Anti-Glare"],
    richContent: true
  },
  {
    id: "2",
    title: "Commercial Vehicle AI Visual Safety Monitoring System",
    image: "products image/products2.png",
    description: "Comprehensive visual monitoring system designed for commercial fleets. Features 360-degree AVM, DMS (Driver Monitoring System), and ADAS voice warnings.",
    features: ["DMS Driver Monitoring", "BSD Blind Spot Detection", "0.8t Computing Power", "Beidou Positioning"]
  },
  {
    id: "3",
    title: "Surround-View AI Early Warning System",
    image: "products image/products3.png",
    description: "Advanced surround view system with 4G LTE connectivity. Provides real-time panoramic monitoring and early warning for potential hazards around the vehicle.",
    features: ["Panoramic AI Warning", "4G LTE Connectivity", "Real-time Monitoring", "Cloud Storage"]
  },
  {
    id: "4",
    title: "Engineering vehicle radar warning system",
    image: "products image/products4.png",
    description: "Specifically designed for engineering vehicles like dump trucks and excavators. Features dual-directional safety protection and radar warning.",
    features: ["Dual-Directional Safety", "Radar Warning", "Geofence Flashing Alert", "Voice Reminders"]
  },
  {
    id: "5",
    title: "AI Visual Safety Monitoring System",
    image: "products image/products5.png",
    description: "A robust safety solution integrating multiple cameras and AI processing to ensure safety in complex logistical environments.",
    features: ["Multi-channel Recording", "AI Object Detection", "Data Analysis", "Fleet Management"]
  },
  {
    id: "6",
    title: "Panoramic Mini Explosion-Proof Camera",
    image: "products image/products6.png",
    description: "Compact and rugged camera designed for hazardous environments. Resistant to dust, water, and impact.",
    features: ["Explosion Proof", "Miniature Design", "Waterproof IP69K", "Wide Angle Lens"]
  },
  {
    id: "7",
    title: "360° Panoramic Safety Driving Assistance System",
    image: "products image/products7.png",
    description: "Full panoramic view with no blind spots. 4-Channel HD recording and no-light night vision capabilities.",
    features: ["Full Panorama", "No Blind Spot", "4-Channel HD Recording", "No-Light Night Vision"]
  },
  {
    id: "8",
    title: "Panoramic Electronic Rearview Mirror System",
    image: "products image/products8.png",
    description: "Replaces traditional mirrors with high-definition cameras and displays. Offers ultra-wide angle view and streaming rearview capabilities.",
    features: ["Ultra-wide Angle", "Streaming Rearview", "View Adjustment", "Fuel Saving Design"]
  },
  {
    id: "9",
    title: "Active Safety Driving Assistance System",
    image: "products image/products9.png",
    description: "Strong algorithm performance ensuring stable and reliable safety assistance. Includes high-definition night vision and 24-hour monitoring.",
    features: ["HD Night Vision", "24-Hour Monitoring", "Unique Algorithm", "Military-Grade Quality"]
  },
  {
    id: "10",
    title: "360° Panoramic Driving Assistance System (4G Version)",
    image: "products image/products10.png",
    description: "The 4G connected version of our standard panoramic system. Allows remote monitoring and data transmission.",
    features: ["4G Remote View", "GPS Tracking", "Real-time Alerts", "Cloud Backup"]
  },
  {
    id: "11",
    title: "720° Panoramic Streaming Safety Driving Assistance System",
    image: "products image/products11.png",
    description: "The ultimate safety solution covering 720 degrees (interior and exterior). Features fisheye night vision and worry-free recording.",
    features: ["720 Degree View", "Fisheye Night Vision", "A-Pillar Blind Spot Removal", "Streaming Media"]
  }
];

(function () {
  var listPage = document.getElementById("products-list-page");
  var detailPage = document.getElementById("product-detail-page");
  var gridEl = document.getElementById("products-grid");
  var detailContentEl = document.getElementById("product-detail-content");
  var backBtn = document.getElementById("products-back-btn");

  function getProductIdFromHash() {
    var hash = window.location.hash;
    if (hash && hash.indexOf("product/") === 1) {
      return hash.replace("#product/", "").replace("/", "");
    }
    return null;
  }

  function showList() {
    if (listPage) listPage.style.display = "block";
    if (detailPage) detailPage.style.display = "none";
    window.scrollTo(0, 0);
  }

  function showDetail(id) {
    var product = PRODUCTS_DATA.filter(function (p) { return p.id === id; })[0];
    if (!product) {
      showList();
      return;
    }
    if (listPage) listPage.style.display = "none";
    if (detailPage) detailPage.style.display = "block";
    renderDetail(product);
    window.scrollTo(0, 0);
  }

  function renderGrid() {
    if (!gridEl) return;
    var html = "";
    PRODUCTS_DATA.forEach(function (p) {
      html += '<a href="#product/' + p.id + '" class="prod-card" data-id="' + p.id + '">';
      html += '  <div class="prod-card-img-wrap">';
      html += '    <img src="' + (p.image || "") + '" alt="' + (p.title || "").replace(/"/g, "&quot;") + '" class="prod-card-img">';
      html += '    <div class="prod-card-overlay"><div class="prod-card-overlay-inner"><span class="prod-card-overlay-text">View Details</span></div></div>';
      html += '  </div>';
      html += '  <div class="prod-card-footer"><h3 class="prod-card-title">' + (p.title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</h3></div>';
      html += '</a>';
    });
    gridEl.innerHTML = html;

    gridEl.addEventListener("click", function (e) {
      var card = e.target.closest(".prod-card");
      if (card) {
        e.preventDefault();
        var id = card.getAttribute("data-id");
        if (id) {
          window.location.hash = "product/" + id;
          showDetail(id);
        }
      }
    });
  }

  function renderDetail(p) {
    if (!detailContentEl) return;
    var priceHtml = p.price
      ? '<p class="prod-detail-price">' + p.price + ' <span class="prod-detail-price-old">¥0.00</span></p>'
      : '<p class="prod-detail-price">Contact for Price</p>';
    var richBlock = "";
    if (p.richContent) {
      richBlock =
        '<div class="prod-detail-rich">' +
        '  <div class="prod-detail-figure">' +
        '    <div class="prod-detail-fig-inner">' +
        '      <div class="prod-detail-figure-img">' +
        '        <img src="https://picsum.photos/seed/schematic1/800/400" alt="Blind Spot Schematic">' +
        '      </div>' +
        '    </div>' +
        '    <p class="prod-detail-figcap">Figure 1: Schematic Diagram of Truck Blind Spots and Inner Wheel Difference</p>' +
        '  </div>' +
        '  <div class="prod-detail-rich-text">' +
        '    <p>Electronic rearview mirrors are devices that <strong>replace/supplement</strong> traditional optical exterior rearview mirrors. High-definition (HD) electronic cameras are installed near the traditional rearview mirrors.</p>' +
        '    <p>Each side is equipped with one <strong>telephoto camera</strong> and one <strong>wide-angle camera</strong>.</p>' +
        '    <p>The cameras feature <strong>Wide Dynamic Range (WDR)</strong> technology. When exposed to direct glare, they can still display clear images.</p>' +
        '  </div>' +
        '  <div class="prod-detail-figure">' +
        '    <div class="prod-detail-diagram2">' +
        '      <div class="prod-detail-diagram2-inner">' +
        '        <div class="prod-detail-diagram2-square"></div>' +
        '        <div class="prod-detail-diagram2-triangle-top"></div>' +
        '        <div class="prod-detail-diagram2-triangle-bottom"></div>' +
        '        <span class="prod-detail-diagram2-label-left">45° Angle</span>' +
        '        <span class="prod-detail-diagram2-label-right">Field of View</span>' +
        '      </div>' +
        '    </div>' +
        '    <p class="prod-detail-figcap">Figure 2: Irradiation Angle Range of Telephoto Camera</p>' +
        '  </div>' +
        '</div>';
    }
    var html =
      '<div class="prod-detail-box">' +
      '  <div class="prod-detail-top">' +
      '    <div class="prod-detail-main">' +
      '      <div class="prod-detail-img-wrap">' +
      '        <img src="' + (p.image || "") + '" alt="' + (p.title || "").replace(/"/g, "&quot;") + '" class="prod-detail-img">' +
      '      </div>' +
      '      <div class="prod-detail-thumbs">' +
      '        <div class="prod-detail-thumb prod-detail-thumb-active"><img src="' + (p.image || "") + '" alt=""></div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="prod-detail-info">' +
      '      <h1 class="prod-detail-title">' + (p.title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</h1>' +
      '      <button type="button" class="prod-detail-share"><i class="fas fa-share-alt"></i> Share</button>' +
      '      <div class="prod-detail-price-wrap">' + priceHtml + '</div>' +
      '      <a href="tel:075526909484" class="prod-detail-cta"><i class="fas fa-phone-alt"></i> 0755-26909484</a>' +
      '    </div>' +
      '  </div>' +
      '  <div class="prod-detail-tabs">' +
      '    <div class="prod-detail-tab-head"><span class="prod-detail-tab-active">Product Detail</span></div>' +
      '    <div class="prod-detail-tab-body">' +
      '      <h2 class="prod-detail-h2">' + (p.title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</h2>' +
      '      <div class="prod-detail-section">' +
      '        <h3 class="prod-detail-h3">1. Function Description</h3>' +
      '        <p class="prod-detail-desc">' + (p.description || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</p>' +
      '        ' + richBlock +
      '      </div>' +
      '      <div class="prod-detail-section">' +
      '        <h3 class="prod-detail-h3">2. Accessory List</h3>' +
      '        <div class="prod-detail-table-wrap">' +
      '          <table class="prod-detail-table">' +
      '            <thead><tr><th>Serial No.</th><th>Name</th><th>Model/Spec</th><th>Qty</th><th>Remarks</th></tr></thead>' +
      '            <tbody>' +
      '              <tr><td>1</td><td>Electronic Rearview Mirror Display</td><td>YG-eMIRROR-T5</td><td>2</td><td>Standard Configuration</td></tr>' +
      '              <tr><td>2</td><td>Fisheye Camera</td><td>CPA72-185-A07</td><td>4</td><td>Standard Configuration</td></tr>' +
      '              <tr><td>3</td><td>Rabbit Ear Camera Mount</td><td>/</td><td>1</td><td>Standard Configuration</td></tr>' +
      '            </tbody>' +
      '          </table>' +
      '        </div>' +
      '      </div>' +
      '      <div class="prod-detail-section">' +
      '        <h3 class="prod-detail-h3">3. Technical Parameters</h3>' +
      '        <div class="prod-detail-block-wrap">' +
      '          <div class="prod-detail-block">' +
      '            <div class="prod-detail-block-item prod-detail-block-item-1">Camera 1 ISP</div>' +
      '            <div class="prod-detail-block-item prod-detail-block-item-2">Camera 2 ISP</div>' +
      '            <div class="prod-detail-block-item prod-detail-block-item-3">Camera 3 ISP</div>' +
      '            <div class="prod-detail-block-main">T5 Main Unit</div>' +
      '            <div class="prod-detail-block-item prod-detail-block-item-4">LCD Screen</div>' +
      '            <div class="prod-detail-block-item prod-detail-block-item-5">SD Card</div>' +
      '            <div class="prod-detail-block-item prod-detail-block-item-6">4G / GPS</div>' +
      '          </div>' +
      '        </div>' +
      '        <p class="prod-detail-block-figcap">Overall System Block Diagram</p>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    detailContentEl.innerHTML = html;
  }

  function onHashChange() {
    var id = getProductIdFromHash();
    if (id) showDetail(id);
    else showList();
  }

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.hash = "";
      showList();
    });
  }
  window.addEventListener("hashchange", onHashChange);

  renderGrid();
  onHashChange();

  /* 导航栏：与 script.js 一致的滚动与汉堡菜单 */
  var header = document.querySelector(".dark-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");
  var bars = document.querySelectorAll(".bar");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }
  if (menuToggle && navLinks && bars.length === 3) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      if (navLinks.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        bars[1].style.opacity = "0";
      } else {
        bars[0].style.transform = "none";
        bars[2].style.transform = "none";
        bars[1].style.opacity = "1";
      }
    });
  }
})();
