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
    title: "TS-B0101 Commercial Vehicle AI Visual Safety Monitoring System",
    image: "products image/products2.png",
    price: "¥ 999999.00",
    description: "Comprehensive visual monitoring system designed for commercial fleets. Features 360-degree AVM, DMS (Driver Monitoring System), and ADAS voice warnings.",
    features: ["DMS Driver Monitoring", "BSD Blind Spot Detection", "0.8t Computing Power", "Beidou Positioning"],
    customBodyHtml:
      '<h2 class="prod-detail-h2">TS-B0101 Commercial Vehicle AI Visual Safety Monitoring System</h2>' +
      '<div class="prod-detail-figure" style="margin-bottom: 2rem;">' +
      '  <div class="prod-detail-fig-inner">' +
      '    <div class="prod-detail-figure-img">' +
      '      <img src="products image/2-1.jpg" alt="TS-B0101" style="max-width: 100%; height: auto;">' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">I. Product Introduction</h3>' +
      '  <p class="prod-detail-desc">TS-B0101 AI visual safety monitoring system adopts a high-performance image processing chip, its NPU computility is 0.8T. It is developed based on the LINUX operating system and complies with the national standard 808/1078 and other protocol standards. It can track fault conditions in real time and support intelligent operation and maintenance functions such as remote parameter query and setting. It is a high-value visual intelligent terminal system that integrates satellite positioning, video monitoring, AI intelligent algorithms, and vehicle network technology applications. AI visual function: It contains face recognition, ADAS early warning, DMS driver monitoring, BSD pedestrian/vehicle blind spot detection and 360°AVM panorama, which covers the vehicle surroundings and blind spots. The pedestrian detection visual algorithm of BSD warning system actively provides voice alarm reminders when there are pedestrians or obstacles in the alarm area around the vehicle; The device supports 6 camera inputs; supports IO signal/Ethernet/RS485/RS232/USB/CAN communication interfaces, can be connected to peripheral radar obstacle detection, and can be continuously optimized and upgraded according to different customer needs. Vehicle networking function: Supports vehicle CAN information collection and processing, obtains vehicle GPS positioning, speed, weighing data, operation mileage statistics, duration statistics, and status information statistics.</p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">Functional Features:</h3>' +
      '  <ul class="prod-detail-list">' +
      '    <li><strong>AI function:</strong> A high-performance image 0.8T computing power processing chip, supports face recognition, DMS (closed eyes/yawning fatigue, sunglasses, distraction, smoking, calling, driver detection, blocking camera, driver replacement, seat belt, helmet recognition), ADAS early warning (early warnings of front vehicle collision, vehicle too close, pedestrian collision and lane departure), 4- channel BSD blind spot monitoring system, algorithm area calibration;</li>' +
      '    <li><strong>Positioning:</strong> Supports single BeiDou positioning, BD/GPS dual-mode high-precision positioning, and geofencing;</li>' +
      '    <li><strong>Wireless module:</strong> Supports 4G Full Netcom (all major carriers);</li>' +
      '    <li><strong>Power supply:</strong> 9 〜 36V input on load, with under-voltage/short circuit/reverse connection and other circuit protection, automatic shutdown when low current;</li>' +
      '    <li><strong>Video:</strong> Supports 6-channel 720P camera AHD input; supports 1-channel AHD PAL output;</li>' +
      '    <li><strong>Data storage:</strong> Supports up to 1 micro SD card with 1TB storage; Built in supercapacitor to prevent data loss during abnormal power outages;</li>' +
      '    <li><strong>Communication interface:</strong> Supports IO signal/Ethernet/RS485/RS232/USB2.0/USB3.0/CAN communication interface, which can be connected to external peripherals, such as weighing, speed, etc., and CAN collects/links vehicle controller data;</li>' +
      '    <li><strong>Voice alarm:</strong> Supports speaker, audible and visual alarm</li>' +
      '    <li>Device OTA upgrade.</li>' +
      '  </ul>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">Product Technical Parameters</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Item</th><th>Equipment parameters</th><th>Performance indicators</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td rowspan="1">Protocol</td><td>Communication protocol</td><td>JT/T 808-2019, JT/T 1078-2016, Su Standard DB 32/T3610.3-2019 GNSS System for Operating Vehicles—Video Communication Protocol</td></tr>' +
      '        <tr><td rowspan="1">System</td><td>Operating language, system</td><td>Chinese, linux system</td></tr>' +
      '        <tr><td rowspan="3">COM (Computer on module)</td><td>CPU</td><td>Quad-core Cortex-A55</td></tr>' +
      '        <tr><td>GPU</td><td>G52 2EE，OpenGL ES 1.1/2.0/3.2, Vulkan 1.1, OpenCL 2.0</td></tr>' +
      '        <tr><td>NNIP</td><td>RK NN, 0.8 Tops</td></tr>' +
      '        <tr><td rowspan="2">Storage</td><td>Running memory</td><td>1GB</td></tr>' +
      '        <tr><td>EMMC</td><td>4GB</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '  <div class="prod-detail-table-wrap" style="margin-top: 1rem;">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Item</th><th>Equipment parameters</th><th>Performance indicators</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td rowspan="5">Video input Output</td><td>Video system</td><td>PAL/NTSC</td></tr>' +
      '        <tr><td>Image compression standard</td><td>H.264</td></tr>' +
      '        <tr><td>Video input</td><td>6-channel 720P AHD M12-4 aviation connector video input,</td></tr>' +
      '        <tr><td>Video output</td><td>1-channel HD AHD/CVBS M12-4 aviation connector video output</td></tr>' +
      '        <tr><td>Resolution</td><td>Digital HD 720P, main stream video recording, sub stream 4G/wifi net transfer</td></tr>' +
      '        <tr><td rowspan="2">Audio input Output</td><td>Audio input</td><td>1-channel DMS audio input or microphone</td></tr>' +
      '        <tr><td>Audio output</td><td>1-channel DMS audio output</td></tr>' +
      '        <tr><td rowspan="3">Recording</td><td>Storage media</td><td>Main memory: micro SD card, single card maximum support 1TB</td></tr>' +
      '        <tr><td>Recording mode</td><td>Power on recording;</td></tr>' +
      '        <tr><td>Recording playback</td><td>Support local playback, PC playback</td></tr>' +
      '        <tr><td>Satellite positioning</td><td>GPS/BeiDou</td><td>Support single BeiDou positioning, GPS positioning, GPS/BeiDou dual-mode positioning,</td></tr>' +
      '        <tr><td rowspan="2">Communication module</td><td>4G</td><td>Full Netcom</td></tr>' +
      '        <tr><td>WIFI/Bluetooth</td><td>Supports WIFI 4/6 signals</td></tr>' +
      '        <tr><td>Gyroscope</td><td>G-sensor</td><td>Built-in 6-axis gyroscope, which can collect the vehicle status information</td></tr>' +
      '        <tr><td rowspan="3">Power supply/Power consumption</td><td>Power supply input</td><td>DC: 9V~36V low voltage power supply</td></tr>' +
      '        <tr><td>Power supply output</td><td>Power supply for external devices: 1-channel 12V/200mA, 1-channel 5V/500m</td></tr>' +
      '        <tr><td>Host power consumption</td><td>Less than 12w</td></tr>' +
      '        <tr><td>Physical interface</td><td>Communication interface</td><td>Supports 3 IO signal inputs, 3 IO outputs, 1 RS232, 2 RS485, 1 100Mbps Ethernet, 1 USB2.0, 1 USB3.0, 1 CAN communication interface, 1 speed sensor, 1 infrared signal interface, 6-channel AHD video input</td></tr>' +
      '        <tr><td>Speaker</td><td>External</td><td>1 Speaker interface, external connectable audible and visual alarm</td></tr>' +
      '        <tr><td rowspan="2">Structure</td><td>Product dimensions and weight</td><td>Length 147xWidth 146xHeight 41.5mm</td></tr>' +
      '        <tr><td>Device protection</td><td>Physical dustproof</td></tr>' +
      '        <tr><td rowspan="2">Operating environment</td><td>Operating temperature</td><td>-25~65℃</td></tr>' +
      '        <tr><td>Operating humidity</td><td>20%-90%RH</td></tr>' +
      '        <tr><td>Software upgrade</td><td>-</td><td>Supports local U disk/SD card upgrade; OTA remote upgrade</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3" style="margin-bottom: 0.5rem;">Product Drawings</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner">' +
      '      <div class="prod-detail-figure-img">' +
      '        <img src="products image/2-2.jpg" alt="Product Drawings">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div style="margin-top: 0.5rem;">' +
      '    <span style="font-size: 1rem; font-weight: bold; color: #374151;">Interface Definitions Backplane</span>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">C3030 HF 2*11 22 PIN Interface</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Serial No.</th><th>PIN sequence</th><th>Remarks</th><th>Serial No.</th><th>PIN sequence</th><th>Remarks</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td>1</td><td>232-RX</td><td></td><td>12</td><td>MIC-P/232-TX</td><td></td></tr>' +
      '        <tr><td>2</td><td>AHD signal output</td><td>Video output</td><td>13</td><td>Camera 3 signal</td><td>DMS</td></tr>' +
      '        <tr><td>3</td><td>AHD signal ground</td><td></td><td>14</td><td>Camera 3 power supply</td><td></td></tr>' +
      '        <tr><td>4</td><td>Camera 4 power supply/AHD signal power supply</td><td>BSD</td><td>15</td><td>Camera 3 power supply ground</td><td></td></tr>' +
      '        <tr><td>5</td><td>Camera 4 signal</td><td></td><td>16</td><td>Camera 5 signal</td><td>Front view</td></tr>' +
      '        <tr><td>6</td><td>Camera 4/6 power supply ground</td><td></td><td>17</td><td>Camera 5 power supply</td><td></td></tr>' +
      '        <tr><td>7</td><td>Camera 6 signal</td><td>Rear view</td><td>18</td><td>Camera 5/7 power supply ground</td><td></td></tr>' +
      '        <tr><td>8</td><td>Camera 6 power supply</td><td></td><td>19</td><td>Camera 7 signal</td><td>Left front view</td></tr>' +
      '        <tr><td>9</td><td>Camera 8 power supply ground</td><td>Right front view</td><td>20</td><td>Camera 7 power supply</td><td></td></tr>' +
      '        <tr><td>10</td><td>Camera 8 signal</td><td></td><td>21</td><td>CAN-L</td><td></td></tr>' +
      '        <tr><td>11</td><td>Camera 8 power supply</td><td></td><td>22</td><td>CAN-H</td><td></td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">C3030 HF 2*12 24 PIN Interface</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Serial No.</th><th>PIN sequence</th><th>Serial No.</th><th>PIN sequence</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td>1</td><td>Power supply input</td><td>13</td><td>IO output 1</td></tr>' +
      '        <tr><td>2</td><td>Power supply ground</td><td>14</td><td>232-RX / 485_A2</td></tr>' +
      '        <tr><td>3</td><td>Relay input</td><td>15</td><td>232-TX / 485_B2</td></tr>' +
      '        <tr><td>4</td><td>Relay output</td><td>16</td><td>IO input 3</td></tr>' +
      '        <tr><td>5</td><td>ACC input</td><td>17</td><td>IR signal</td></tr>' +
      '        <tr><td>6</td><td>IO input 1</td><td>18</td><td>12V seat switch output</td></tr>' +
      '        <tr><td>7</td><td>IO input 2</td><td>19</td><td>12V seat switch detection</td></tr>' +
      '        <tr><td>8</td><td>232-RX / 485A</td><td>20</td><td>12V/5V output ground / speed sensor ground</td></tr>' +
      '        <tr><td>9</td><td>232-TX / 485B</td><td>21</td><td>12V output power supply / speed sensor power supply</td></tr>' +
      '        <tr><td>10</td><td>SpeakerSPK-P</td><td>22</td><td>5V output powersupply</td></tr>' +
      '        <tr><td>11</td><td>SpeakerSPK-N</td><td>23</td><td>Speed sensorsignal</td></tr>' +
      '        <tr><td>12</td><td>MicrophoneMIC-N</td><td>24</td><td>MicrophoneMIC-P</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">II. Component Parts</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Serial No.</th><th>Part name</th><th>Picture</th><th>Quantity</th><th>Remarks</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr>' +
      '          <td>1</td>' +
      '          <td>Main unit</td>' +
      '          <td><img src="products image/2-3-1.jpg" alt="Main unit" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 unit</td>' +
      '          <td>AI visual function, vehicle networking function</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>2</td>' +
      '          <td>Power communication cable</td>' +
      '          <td><img src="products image/2-3-2.jpg" alt="Power communication cable" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>24PIN plug: Power positive and negative, ACC, relay input/output, 3 IO inputs, 3 IO outputs, RS232/RS485 interfaces, speaker, microphone interfaces, 12V output, 5V output, seatswitch, speed sensor</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>3</td>' +
      '          <td>Video cable</td>' +
      '          <td><img src="products image/2-3-3.jpg" alt="Video cable" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>22PIN plug:1-channel AHD HD video output, 6-channel AHD video input, RS485, CAN interface</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>4</td>' +
      '          <td>GPS antenna</td>' +
      '          <td><img src="products image/2-3-4.jpg" alt="GPS antenna" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>Optional accessory</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>5</td>' +
      '          <td>4G antenna</td>' +
      '          <td><img src="products image/2-3-5.jpg" alt="4G antenna" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>Optional accessory</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>6</td>' +
      '          <td>WiFi antenna</td>' +
      '          <td><img src="products image/2-3-6.jpg" alt="WiFi antenna" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>Optional accessory</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>7</td>' +
      '          <td>Remote control</td>' +
      '          <td><img src="products image/2-3-7.jpg" alt="Remote control" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>Accessory</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>8</td>' +
      '          <td>Infrared receiver (3PIN)</td>' +
      '          <td><img src="products image/2-3-8.png" alt="Infrared receiver (3PIN)" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>Accessory</td>' +
      '        </tr>' +
      '        <tr>' +
      '          <td>9</td>' +
      '          <td>External speaker</td>' +
      '          <td><img src="products image/2-3-9.png" alt="External speaker" style="max-width:160px;height:auto;"></td>' +
      '          <td>1 pcs</td>' +
      '          <td>2W 8Ω, accessory</td>' +
      '        </tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>'
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

    var detailBody = '';
    if (p.customBodyHtml) {
      detailBody = p.customBodyHtml;
    } else {
      detailBody =
        '<h2 class="prod-detail-h2">' + (p.title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</h2>' +
        '<div class="prod-detail-section">' +
        '  <h3 class="prod-detail-h3">1. Function Description</h3>' +
        '  <p class="prod-detail-desc">' + (p.description || "").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</p>' +
        '  ' + richBlock +
        '</div>' +
        '<div class="prod-detail-section">' +
        '  <h3 class="prod-detail-h3">2. Accessory List</h3>' +
        '  <div class="prod-detail-table-wrap">' +
        '    <table class="prod-detail-table">' +
        '      <thead><tr><th>Serial No.</th><th>Name</th><th>Model/Spec</th><th>Qty</th><th>Remarks</th></tr></thead>' +
        '      <tbody>' +
        '        <tr><td>1</td><td>Electronic Rearview Mirror Display</td><td>YG-eMIRROR-T5</td><td>2</td><td>Standard Configuration</td></tr>' +
        '        <tr><td>2</td><td>Fisheye Camera</td><td>CPA72-185-A07</td><td>4</td><td>Standard Configuration</td></tr>' +
        '        <tr><td>3</td><td>Rabbit Ear Camera Mount</td><td>/</td><td>1</td><td>Standard Configuration</td></tr>' +
        '      </tbody>' +
        '    </table>' +
        '  </div>' +
        '</div>' +
        '<div class="prod-detail-section">' +
        '  <h3 class="prod-detail-h3">3. Technical Parameters</h3>' +
        '  <div class="prod-detail-block-wrap">' +
        '    <div class="prod-detail-block">' +
        '      <div class="prod-detail-block-item prod-detail-block-item-1">Camera 1 ISP</div>' +
        '      <div class="prod-detail-block-item prod-detail-block-item-2">Camera 2 ISP</div>' +
        '      <div class="prod-detail-block-item prod-detail-block-item-3">Camera 3 ISP</div>' +
        '      <div class="prod-detail-block-main">T5 Main Unit</div>' +
        '      <div class="prod-detail-block-item prod-detail-block-item-4">LCD Screen</div>' +
        '      <div class="prod-detail-block-item prod-detail-block-item-5">SD Card</div>' +
        '      <div class="prod-detail-block-item prod-detail-block-item-6">4G / GPS</div>' +
        '    </div>' +
        '  </div>' +
        '  <p class="prod-detail-block-figcap">Overall System Block Diagram</p>' +
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
      detailBody +
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
