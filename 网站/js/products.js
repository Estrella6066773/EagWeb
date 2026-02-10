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
    richContent: true,
    customBodyHtml:
      '<h2 class="prod-detail-h2">Streaming Media Electronic Rearview Mirror System</h2>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">1. Function Description</h3>' +
      '  <p class="prod-detail-desc">In the field of commercial vehicles (buses, coaches, trucks), the large and tall body structure, combined with the inner wheel difference during turning, creates multiple visual blind spots for drivers. These blind spots pose potential accident hazards. The installation of electronic rearview mirrors can effectively improve driving safety, as shown in the diagram below:</p>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 400px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/1-1.png" alt="Schematic Diagram of Truck Blind Spots and Inner Wheel Difference" style="width: 100%; display: block;">' +
      '      </div>' +
      '      <div class="prod-detail-figcap">Figure 1: Schematic Diagram of Truck Blind Spots and Inner Wheel Difference</div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc">Electronic rearview mirrors are devices that replace/supplement traditional optical exterior rearview mirrors for monitoring blind spots at the vehicle’s side/rear and around the left/right front wheels. The system consists of four electronic rearview cameras, two in-vehicle displays, and auxiliary equipment, aiming to reduce vehicle blind spots, alleviate driver fatigue, and enhance driving safety.</p>' +
      '  <p class="prod-detail-desc">High-definition (HD) electronic cameras are installed near the traditional rearview mirrors on the upper front part of the vehicle. Their angles can be adjusted according to actual vehicle conditions to achieve the optimal monitoring range. Each side is equipped with one telephoto camera and one wide-angle camera (short-focus type):</p>' +
      '  <ul class="prod-detail-list">' +
      '    <li>The telephoto camera mainly provides images within the 45° range of the vehicle’s side and rear;</li>' +
      '    <li>The wide-angle camera (short-focus type) covers blind spots at the left front and right front of the vehicle, while compensating for blind areas between the driver’s field of view and the telephoto camera’s field of view.</li>' +
      '  </ul>' +
      '  <p class="prod-detail-desc">The cameras feature Wide Dynamic Range (WDR) technology. When exposed to direct glare, they can still display clear images of both bright and dark areas on the screen.</p>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 400px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/1-2.png" alt="Irradiation Angle Range of Telephoto Camera" style="width: 100%; display: block;">' +
      '      </div>' +
      '      <div class="prod-detail-figcap">Figure 2: Irradiation Angle Range of Telephoto Camera</div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 400px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/1-3.png" alt="Irradiation Distance Range of Wide-Angle Camera (Short-Focus Type)" style="width: 100%; display: block;">' +
      '      </div>' +
      '      <div class="prod-detail-figcap">Figure 3: Irradiation Distance Range of Wide-Angle Camera (Short-Focus Type)</div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc">HD images captured by the cameras are displayed in split-screen mode on the in-vehicle HD displays. The displays can automatically adjust brightness based on internal and external ambient light, ensuring clear images with high visibility in daytime, nighttime, and severe weather conditions. The screen surface adopts a matte finish (or other anti-glare technologies) to suppress reflections caused by direct strong light on the screen.</p>' +
      '  <p class="prod-detail-desc">The electronic rearview mirror system has an image storage function. Images captured by the cameras are stored in the attached storage device, which can be used as evidence for vehicle accident investigations and determination of legal liability for accidents.</p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">2. Accessory List</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr><th>Serial No.</th><th>Name</th><th>Model/Specification</th><th>Quantity</th><th>Unit</th><th>Remarks</th></tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td>1</td><td>Electronic Rearview Mirror Display</td><td>YG-eMIRROR-T5</td><td>2</td><td>Unit</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>2</td><td>Fisheye Camera</td><td>CPA72-185-A07</td><td>4</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>3</td><td>Narrow-Angle Camera</td><td>CPA72-090-A04</td><td>1</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>4</td><td>Rabbit Ear-Type Camera Mounting Structure</td><td>/</td><td>1</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>4.1</td><td>Rabbit Ear Wide-Angle Camera</td><td>CPA72-125-A00</td><td>1</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>4.2</td><td>Rabbit Ear Fisheye Camera</td><td>CPA72-185-A00</td><td>1</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>5</td><td>Display Wiring Harness</td><td>Equipped with 24V power interface, 2/5-channel AHD (Analog High Definition) camera input, 1-channel AHD video output, 12V power output, 3× switch signal detection, 1× CAN (Controller Area Network)</td><td>2</td><td>Piece</td><td>Standard Configuration</td></tr>' +
      '        <tr><td>6</td><td>SD Card</td><td>Default 32GB</td><td>1</td><td>Piece</td><td>Optional Accessory (for additional installation)</td></tr>' +
      '        <tr><td>7</td><td>Narrow-Angle Camera Extension Cable</td><td>Length determined based on actual vehicle installation</td><td>1</td><td>Piece</td><td>Optional Accessory (for additional installation)</td></tr>' +
      '        <tr><td>8</td><td>Fisheye Camera Extension Cable</td><td>Length determined based on actual vehicle installation</td><td>1</td><td>Piece</td><td>Optional Accessory (for additional installation)</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">3. Technical Parameters</h3>' +
      '  <h4 class="prod-detail-h4">3.1 System Configuration</h4>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 400px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/1-4.png" alt="Overall System Block Diagram" style="width: 100%; display: block;">' +
      '      </div>' +
      '      <div class="prod-detail-figcap">Overall System Block Diagram</div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc">' +
      '    (1) The main unit supports 2 external camera inputs, expandable to 6 camera inputs;<br>' +
      '    (2) The main unit is equipped with 1-channel AHD (Analog High Definition) video output interface;<br>' +
      '    (3) The main unit has an SD card interface supporting over 64GB for storing recorded video data;<br>' +
      '    (4) The main unit is configured with 1-channel CAN (Controller Area Network) bus to communicate with the vehicle’s main CAN bus;<br>' +
      '    (5) The main unit is equipped with 3-channel hardwired interfaces to receive reverse switch signal, parking light switch signal, and ACC (Accessory) switch signal;<br>' +
      '    (6) The main unit provides 12V/24V 0.5A external power output;<br>' +
      '    (7) The main unit is configured with a buzzer alarm;<br>' +
      '    (8) The main unit has an external light detection function;<br>' +
      '    (9) The main unit supports infrared remote control;<br>' +
      '    (10) The main unit supports AI processor integration in upgraded versions to enable BSD (Blind Spot Detection) function.' +
      '  </p>' + +
      '</div>'
  },
  {
    id: "2",
    title: "Commercial Vehicle AI Visual Safety Monitoring System",
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
    price: "¥ 999999.00",
    description: "Advanced surround view system with 4G LTE connectivity. Provides real-time panoramic monitoring and early warning for potential hazards around the vehicle.",
    features: ["Panoramic AI Warning", "4G LTE Connectivity", "Real-time Monitoring", "Cloud Storage"],
    customBodyHtml:
      '<h2 class="prod-detail-h2">Surround-View AI Early Warning System</h2>' +
      '<div class="prod-detail-figure">' +
      '  <div class="prod-detail-fig-inner" style="max-width: 450px; margin: 0 auto;">' +
      '    <div class="prod-detail-figure-img" style="background: none;">' +
      '      <img src="products image/3-1.png" alt="Surround-View AI Early Warning System" style="width: 100%; display: block;">' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">I. System Overview and Application Background</h3>' +
      '  <p class="prod-detail-desc">During the operation of engineering vehicles, collision accidents caused by visual blind spots account for as high as 68%, among which accidents during reversing and steering stages have particularly severe consequences. As a core solution for active safety technology of engineering vehicles, the Surround-View AI Early Warning System constructs a 360° blind-spot-free monitoring network by fusing multi-sensor data and artificial intelligence algorithms, effectively making up for the shortcomings of traditional rearview mirrors and manual observation. The "6-Channel to 8-Channel RS-232 Radar" system analyzed in this document is specifically designed for large engineering vehicles, focusing on solving problems such as blind spot detection, obstacle early warning, and operation safety management under complex working conditions. It is applicable to various types of engineering vehicles including loaders, excavators, and heavy-duty trucks.</p>' +
      '  <p class="prod-detail-desc">The system adopts the design concept of "hardware redundancy + intelligent algorithms". Through 6 basic interfaces, it supports the access of 8-channel RS-232 radars, realizing all-round perception of the environment around the vehicle. Combined with 360° panoramic images and AI target recognition technology, it forms a "vision + radar" dual safety barrier, meeting the technical requirements for the visual field of engineering vehicles specified in industry standards such as GB/T 26773-2011 Earth-Moving Machinery - Visual Field Test Methods.</p>' +
      '</div>' +
      '<div class="prod-detail-figure">' +
      '  <div class="prod-detail-fig-inner" style="max-width: 450px; margin: 0 auto;">' +
      '    <div class="prod-detail-figure-img" style="background: none;">' +
      '      <img src="products image/3-2.png" alt="System Overview" style="width: 100%; display: block;">' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">II. Hardware Architecture and Core Parameters</h3>' +
      '  <h4 class="prod-detail-h4">1 Core Configuration of Main Unit</h4>' +
      '  <p class="prod-detail-desc">The system is equipped with the HI-V500 processor, adopting an ARM Cortex-A7 quad-core architecture with a main frequency of 900MHz. It is combined with 4GB DDR3 memory (1600MHz) and 4GB NOR FLASH storage to build a stable and efficient computing platform. This configuration supports 8-channel 1080P video input and 4-channel 1080P@30fps real-time encoding, with video latency controlled within 150ms, ensuring the real-time performance of early warning information.</p>' +
      '  <p class="prod-detail-desc">The power management module adopts a wide-voltage design (DC12-36V), with surge protection, reverse connection protection, low-voltage protection, and short-circuit overload protection functions, adapting to the complex power environment of engineering vehicles. The overall power consumption of the unit is controlled at 10-30W, and it maintains stable operation within the operating temperature range of -30℃ to 70℃. The storage temperature range is extended to -40℃ to 85℃, fully meeting the requirements of harsh field working conditions.</p>' +
      '  <h4 class="prod-detail-h4">2 Hardware Configuration of Perception Layer</h4>' +
      '  <p class="prod-detail-desc">The visual system consists of 6-channel AHD high-definition cameras, each equipped with a 190° ultra-wide-angle lens, supporting 1080P resolution and 30fps frame rate. The cameras have an IP68 waterproof rating and 0.01Lux starlight-level night vision capability, enabling clear imaging even without supplementary lighting, thus ensuring monitoring effects in low-illumination environments such as nights and tunnels.</p>' +
      '  <p class="prod-detail-desc">The radar system adopts a modular design. Through 6 basic interfaces, it supports the access of 8-channel RS-232 radars, and can be expanded to 16 probes (4 probes in each of the four directions) in practical applications. The radar probes have an operating voltage of DC12-33V, a single-channel power consumption of only 0.2W, and a detection distance of 2.5 meters (in operating state) and 0.3 meters (in flameout security state). With an IP67 waterproof rating, they can adapt to harsh environments such as mud and rain.</p>' +
      '  <p class="prod-detail-desc">The alarm device includes an in-vehicle buzzer (16-level adjustable volume), an LED three-color warning light, and an external audio-visual alarm (≤105dB within 1 meter), forming a "visual + auditory" multi-dimensional early warning matrix. It also supports up to 10 custom alarm sounds to meet warning needs in different scenarios.</p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">III. Analysis of Core Technologies</h3>' +
      '  <h4 class="prod-detail-h4">1 Multi-Sensor Fusion Technology</h4>' +
      '  <p class="prod-detail-desc">The system adopts a "vision + radar" heterogeneous fusion architecture to achieve spatiotemporal synchronization at the data layer:</p>' +
      '  <ul class="prod-detail-list">' +
      '    <li>Radar data is transmitted through the RS-232 interface, using a communication protocol with a 9600bps baud rate, 8 data bits, 1 stop bit, and no parity. The data packet uses 0xC4 (rear-mounted) or 0xE4 (front-mounted) as the command byte, containing distance information of 4-8 channel probes, quantified in units of 2cm (0x10 represents 32cm), with a data update interval of 120ms.</li>' +
      '    <li>After distortion correction, the visual data is seamlessly stitched to generate a 360° panoramic bird\'s-eye view. The NNIE engine (0.5TOPS computing power) is used to realize real-time target detection, supporting multi-category recognition of pedestrians, vehicles, obstacles, etc.</li>' +
      '  </ul>' +
      '  <p class="prod-detail-desc">The fusion algorithm adopts a weighted confidence fusion strategy. When the radar detects an obstacle within 2.5 meters, it triggers the visual system to focus on tracking this area. The IOU matching algorithm is used to realize target association, improving the detection accuracy to over 92% and controlling the false alarm rate below 5%.</p>' +
      '  <h4 class="prod-detail-h4">2 Implementation of Extended Interface Technology</h4>' +
      '  <p class="prod-detail-desc">The "6-channel to 8-channel" expansion capability is realized through GX12 series aviation connectors:</p>' +
      '  <ul class="prod-detail-list">' +
      '    <li>The main controller provides 6-channel GX12-6P female connectors, each expanded to 2-channel GX12-4P connectors through a 1-to-2 connection cable.</li>' +
      '    <li>Bus cascading technology is adopted, and each channel supports a maximum of 4 parallel probes, with different probes distinguished by address coding.</li>' +
      '    <li>The extended circuit is designed with signal amplification and anti-interference functions to ensure data stability during transmission with an extension cable of up to 5 meters.</li>' +
      '  </ul>' +
      '  <p class="prod-detail-desc">Compared with traditional solutions, this design reduces wiring complexity by 40%, and avoids voltage attenuation through a distributed power supply design.</p>' +
      '  <h4 class="prod-detail-h4">3 AI Early Warning Algorithm System</h4>' +
      '  <p class="prod-detail-desc">The system has a built-in multi-level AI algorithm engine:</p>' +
      '  <ul class="prod-detail-list">' +
      '    <li><strong>Basic Detection Layer:</strong> Adopts the YOLOv8 target detection algorithm, optimized and trained for engineering scenarios, supporting real-time recognition of 4 categories of engineering vehicles (including cranes, excavators, trucks) and pedestrians.</li>' +
      '    <li><strong>Behavior Analysis Layer:</strong> Implements functions such as LDW (Lane Departure Warning), FCW (Forward Collision Warning), and BSD (Blind Spot Detection), and dynamically adjusts early warning thresholds through a vehicle speed sensor (accessed via CAN bus).</li>' +
      '    <li><strong>Decision Output Layer:</strong> Triggers multi-level early warnings based on target distance (radar data) and movement trend (visual tracking):' +
      '      <ul class="prod-detail-list" style="margin-top: 0.5rem; margin-left: 1rem;">' +
      '        <li>Distance ＞1.5 meters: Visual prompt (highlighted mark on the display)</li>' +
      '        <li>Distance 1.0-1.5 meters: Audio-visual prompt (in-vehicle buzzer + LED flashing)</li>' +
      '        <li>Distance ＜1.0 meter: Emergency warning (external alarm + deceleration signal output)</li>' +
      '      </ul>' +
      '    </li>' +
      '  </ul>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">IV. Applicable Vehicle Models</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 450px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/3-3.png" alt="Applicable Vehicle Models" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>'
  },
  {
    id: "4",
    title: "Engineering vehicle radar warning system",
    image: "products image/products4.png",
    price: "¥ 999999.00",
    description: "Specifically designed for engineering vehicles like dump trucks and excavators. Features dual-directional safety protection and radar warning.",
    features: ["Dual-Directional Safety", "Radar Warning", "Geofence Flashing Alert", "Voice Reminders"],
    customBodyHtml:
      '<h2 class="prod-detail-h2">Engineering vehicle radar warning system</h2>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">1. Product Overview</h3>' +
      '  <p class="prod-detail-desc">This Blind Spot Warning System is a custom-tailored intelligent warning system designed specifically for the blind spots of large vehicles. The product integrates 2 sets of voice speakers, 1 set of LED warning lights, and ultrasonic radar with intelligent computing, providing real-time safety warnings for both drivers and pedestrians/vehicles.</p>' +
      '  <p class="prod-detail-desc">The system software has been intelligently optimized based on years of experience in large-vehicle radar design and driver feedback. It offers more user-friendly object detection prompts, with the addition of external voice speakers to realize two-way warning (for both in-vehicle and external personnel), reducing the occurrence of accidents. Note: This product is compatible with 4-channel monitoring.</p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">2. Analysis and Solution for Right-turn Blind Spots of Large Vehicles</h3>' +
      '  <h4 class="prod-detail-h4">2.1 Driver’s Cab Perspective</h4>' +
      '  <p class="prod-detail-desc">From the driver’s cab, the right-side blind spot is extremely prominent.</p>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/4-1.png" alt="Driver’s Cab Perspective" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc">Analysis: "Right-turn road hazards" are mainly caused by large vehicles such as muck trucks and concrete mixers, which have significant right-turn blind spots. When pedestrians or vehicle drivers are waiting or moving on the right side, the driver of the large vehicle cannot see the situation on the right at all.</p>' +
      '  <p class="prod-detail-desc"><strong>2.1.1 Large vehicles create right-side blind spots when turning right on roads.</strong></p>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/4-2.png" alt="Right-turn Blind Spots" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc"><strong>2.1.2 Accidents occur due to invisible right-side blind spots when large vehicles are turning right.</strong></p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">3. Solution: Installation of Large Vehicle Blind Spot Warning System</h3>' +
      '  <h4 class="prod-detail-h4">3.1 Install a right-turn warning system on the right side of the large vehicle. When the vehicle turns right, the system provides warning alerts:</h4>' +
      '  <ul class="prod-detail-list">' +
      '    <li>External speakers inform pedestrians and vehicles on the right to keep a safe distance;</li>' +
      '    <li>In-vehicle audio and warning lights alert the driver to obstacles on the right that require attention.</li>' +
      '  </ul>' +
      '  <h4 class="prod-detail-h4">3.2 Installation Diagram of Large Vehicle Blind Spot Warning Radar System:</h4>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/4-3.png" alt="Installation Diagram" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">4. Applicable Vehicle Models for Large Vehicle Blind Spot Warning System</h3>' +
      '  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-1.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Muck Trucks">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Muck Trucks</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-2.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Trucks">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Trucks</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-3.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Concrete Trucks">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Concrete Trucks</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-4.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Buse">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Buse</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-5.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Oil Tankers">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Oil Tankers</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-6.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Excavators">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Excavators</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-7.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Crane Trucks">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Crane Trucks</p>' +
      '    </div>' +
      '    <div style="width: 48%; margin-bottom: 20px; text-align: center;">' +
      '      <img src="products image/4-4-8.png" style="max-width: 370px; width: 100%; display: block; margin: 0 auto 10px auto;" alt="Forklifts">' +
      '      <p class="prod-detail-desc" style="text-align: center; margin: 0;">Forklifts</p>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">5. Product Connection Diagram</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/4-5.png" alt="Product Connection Diagram" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">6. Product Features</h3>' +
      '  <ul class="prod-detail-list">' +
      '    <li>Real-person voice warning alerts</li>' +
      '    <li>24/7 radar warning detection (all-weather operation)</li>' +
      '    <li>LED indicator warning alerts</li>' +
      '    <li>Voice reminders for pedestrians and vehicles</li>' +
      '    <li>Wide operating voltage design</li>' +
      '    <li>Waterproof ultrasonic sensors</li>' +
      '    <li>Automotive-grade waterproof connectors</li>' +
      '    <li>Electronic fence flashing prompts</li>' +
      '  </ul>' +
      '</div>'
  },
  {
    id: "5",
    title: "AI Visual Safety Monitoring System",
    image: "products image/products5.png",
    price: "¥ 9999999.00",
    description: "A robust safety solution integrating multiple cameras and AI processing to ensure safety in complex logistical environments.",
    features: ["Multi-channel Recording", "AI Object Detection", "Data Analysis", "Fleet Management"],
    customBodyHtml:
      '<h2 class="prod-detail-h2">AI Visual Safety Monitoring System</h2>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">1. Product Overview</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/5-1.jpg" alt="AI Visual Safety Monitoring System" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc">The YJ-B0101 AI Visual Safety Monitoring System adopts a high-performance image processing chip with an NPU (Neural Processing Unit) computing power of 0.8T, and runs on the LINUX operating system. It complies with industry standards such as JT/T 808/1078 and other protocol standards, and features intelligent operation and maintenance functions for terminal equipment, including real-time fault tracking and remote parameter query/setting. It is a cost-effective visual intelligent terminal integrating satellite positioning, video monitoring, and AI intelligent algorithms.</p>' +
      '  <h4 class="prod-detail-h4">AI Visual Functions</h4>' +
      '  <p class="prod-detail-desc">It includes face recognition, DMS (Driver Monitoring System), BSD (Blind Spot Detection) for pedestrian/vehicle blind spot monitoring, and 360° AVM (Around View Monitoring) panorama—covering the vehicle’s surrounding environment and blind spots. The pedestrian detection visual algorithm of the BSD warning system actively provides voice alarm reminders when there are pedestrians or obstacles in the vehicle’s surrounding alarm area. The device supports:</p>' +
      '  <ul class="prod-detail-list">' +
      '    <li>6-channel camera input;</li>' +
      '    <li>IO signal/Ethernet/RS485/RS232/USB/CAN communication interfaces (compatible with external radar for obstacle detection);</li>' +
      '    <li>Continuous optimization and upgrading based on different customer needs.</li>' +
      '  </ul>' +
      '  <h4 class="prod-detail-h4">Vehicle Networking Functions</h4>' +
      '  <p class="prod-detail-desc">Supports collection and processing of vehicle CAN (Controller Area Network) information, including vehicle GPS positioning, speed, load weight, operation mileage statistics, duration statistics, and status information statistics.</p>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">0.1 Functional Features</h3>' +
      '  <ul class="prod-detail-list">' +
      '    <li><strong>AI Functions:</strong> Equipped with a high-performance image processing chip (0.8T computing power), supporting face recognition, DMS (detection of closed eyes/yawning fatigue, sunglasses wearing, distraction, smoking, phone use, abnormal driver status, seat belt fastening, and safety helmet wearing), 4-channel BSD blind spot monitoring system, and algorithm area calibration;</li>' +
      '    <li><strong>Positioning:</strong> Supports BD (Beidou)/GPS dual-mode high-precision positioning and geofencing;</li>' +
      '    <li><strong>Wireless Module:</strong> Supports 4G full-network connectivity;</li>' +
      '    <li><strong>Power Supply:</strong> On-vehicle 9~36V input, with circuit protection against under-voltage/short circuit/reverse connection, and automatic shutdown under low voltage;</li>' +
      '    <li><strong>Video:</strong> Supports 6-channel 720P AHD (Analog High Definition) camera input; supports 1-channel AHD PAL video output;</li>' +
      '    <li><strong>Data Storage:</strong> Supports 1 TF card (up to 512GB); built-in super capacitor to prevent data loss due to abnormal power outage;</li>' +
      '    <li><strong>Communication Interfaces:</strong> Supports IO signal/Ethernet/RS485/RS232/USB2.0/USB3.0/CAN interfaces, compatible with external devices (e.g., weighing equipment, speed sensors); CAN enables collection/linkage of vehicle controller data;</li>' +
      '    <li><strong>Voice Alarm:</strong> Supports speaker and audio-visual alarm;</li>' +
      '    <li><strong>Device Upgrade:</strong> Supports OTA (Over-the-Air) remote upgrade.</li>' +
      '  </ul>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">0.2 Product Technical Parameters</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <tbody>' +
      '        <tr><td>Item</td><td>Equipment Parameters</td><td>Performance Indicators</td></tr>' +
      '        <tr><td>Protocol</td><td>Communication Protocols</td><td>JT/T 808-2019, JT/T 1078-2016, Jiangsu Provincial Standard DB 32/T3610.3—2019Video Communication Protocol for Satellite Positioning System of Road Transport Vehicles</td></tr>' +
      '        <tr><td>System</td><td>Operating Language, System</td><td>Chinese; LINUX (based on Rockchip RK3566)</td></tr>' +
      '        <tr><td>Core Board</td><td>CPU</td><td>Quad-core ARM Cortex-A55</td></tr>' +
      '        <tr><td></td><td>GPU</td><td>G52 2EE, supporting OpenGL ES 1.1/2.0/3.0/3.1/3.2, Vulkan 1.1, OpenCL 2.0</td></tr>' +
      '        <tr><td></td><td>NNIP (Neural Network Inference Processor)</td><td>RK NN, 0.8 Tops</td></tr>' +
      '        <tr><td>Video I/O (Input/Output)</td><td>Video System</td><td>PAL/NTSC</td></tr>' +
      '        <tr><td></td><td>Image Compression Standard</td><td>H.264</td></tr>' +
      '        <tr><td></td><td>Video Input</td><td>6-channel 720P AHD video input with M12-4 aviation connectors</td></tr>' +
      '        <tr><td></td><td>Video Output</td><td>1-channel HD AHD/CVBS video output with M12-4 aviation connectors</td></tr>' +
      '        <tr><td></td><td>Resolution</td><td>Digital HD 720P; main stream for video recording, sub-stream for 4G/WiFi network transmission</td></tr>' +
      '        <tr><td>Audio I/O (Input/Output)</td><td>Audio Input</td><td>1-channel DMS audio input or microphone</td></tr>' +
      '        <tr><td></td><td>Audio Output</td><td>1-channel audio output</td></tr>' +
      '        <tr><td>Video Recording</td><td>Storage Medium</td><td>Main storage: Shockproof TF card (single card supports up to 512GB); Secondary storage: (Not specified)</td></tr>' +
      '        <tr><td></td><td>Recording Mode</td><td>Power-on recording</td></tr>' +
      '        <tr><td></td><td>Playback</td><td>Supports local playback and PC-side playback</td></tr>' +
      '        <tr><td>Satellite Positioning</td><td>GPS/Beidou</td><td>Supports GPS positioning and GPS/Beidou dual-mode positioning</td></tr>' +
      '        <tr><td>Communication Module</td><td>4G</td><td>Full-network connectivity</td></tr>' +
      '        <tr><td></td><td>WiFi/Bluetooth</td><td>WiFi 4/6 (optional configuration)</td></tr>' +
      '        <tr><td>Gyroscope</td><td>G-sensor (Gravity Sensor)</td><td>Built-in 6-axis gyroscope, capable of collecting vehicle status information</td></tr>' +
      '        <tr><td>Power Supply/Power Consumption</td><td>Power Input</td><td>DC: 9V~36V low-voltage power supply</td></tr>' +
      '        <tr><td></td><td>Power Output</td><td>Power supply for external devices: 1-channel 12V/200mA, 1-channel 5V/500mA</td></tr>' +
      '        <tr><td></td><td>Host Power Consumption</td><td>Less than 12W</td></tr>' +
      '        <tr><td>Physical Interfaces</td><td>Communication Interfaces</td><td>Supports 3 IO signal inputs, 3 IO outputs, 1 RS232, 2 RS485, 1 100Mbps Ethernet, 1 USB2.0, 1 USB3.0, 1 CAN communication interface, 1 speed sensor interface, 1 infrared signal interface, 6-channel AHD video input</td></tr>' +
      '        <tr><td>Speaker</td><td>External</td><td>1 speaker interface, compatible with external audio-visual alarms</td></tr>' +
      '        <tr><td>Structure</td><td>Product Dimensions & Weight</td><td>Length 147 × Width 146 × Height 41.5 mm</td></tr>' +
      '        <tr><td></td><td>Device Protection</td><td>Physical dustproof</td></tr>' +
      '        <tr><td>Operating Environment</td><td>Operating Temperature</td><td>-30℃ to +75℃</td></tr>' +
      '        <tr><td></td><td>Operating Humidity</td><td>20%-90% RH (Relative Humidity)</td></tr>' +
      '        <tr><td>Software Upgrade</td><td>Upgrade Methods</td><td>Supports local upgrade via USB flash drive/TF card; supports OTA remote upgrade</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">0.4 Product Drawings</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/5-2.jpg" alt="Product Drawings" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">0.5 Interface Definitions</h3>' +
      '  <div class="prod-detail-figure">' +
      '    <div class="prod-detail-fig-inner" style="max-width: 500px; margin: 0 auto;">' +
      '      <div class="prod-detail-figure-img" style="background: none;">' +
      '        <img src="products image/5-3.jpg" alt="Interface Definitions" style="width: 100%; display: block;">' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-desc" style="text-align: center; font-weight: bold;">Front Panel & Rear Panel</p>' +
      '  <h4 class="prod-detail-h4">C3030 HF 2×11 22-PIN Interface</h4>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <tbody>' +
      '        <tr><td>Serial No.</td><td>PIN No.</td><td>Remarks</td><td>Serial No.</td><td>PIN No.</td><td>Remarks</td></tr>' +
      '        <tr><td>1</td><td>485_A1</td><td>-</td><td>12</td><td>485_B1</td><td>-</td></tr>' +
      '        <tr><td>2</td><td>AHD Signal Output</td><td>Video Output</td><td>13</td><td>Camera 3 Signal</td><td>For DMS</td></tr>' +
      '        <tr><td>3</td><td>AHD Signal Ground</td><td>-</td><td>14</td><td>Camera 3 Power Supply</td><td>-</td></tr>' +
      '        <tr><td>4</td><td>Camera 4 Power Supply/AHD Signal Power Supply</td><td>For BSD</td><td>15</td><td>Camera 3 Power Ground</td><td>-</td></tr>' +
      '        <tr><td>5</td><td>Camera 4 Signal</td><td>-</td><td>16</td><td>Camera 5 Signal</td><td>Front View</td></tr>' +
      '        <tr><td>6</td><td>Camera 4/6 Power Ground</td><td>-</td><td>17</td><td>Camera 5 Power Supply</td><td>-</td></tr>' +
      '        <tr><td>7</td><td>Camera 6 Signal</td><td>Rear View</td><td>18</td><td>Camera 5/7 Power Ground</td><td>-</td></tr>' +
      '        <tr><td>8</td><td>Camera 6 Power Supply</td><td>-</td><td>19</td><td>Camera 7 Signal</td><td>Left View</td></tr>' +
      '        <tr><td>9</td><td>Camera 8 Power Ground</td><td>For Right View</td><td>20</td><td>Camera 7 Power Supply</td><td>-</td></tr>' +
      '        <tr><td>10</td><td>Camera 8 Signal</td><td>-</td><td>21</td><td>CAN-L</td><td>CAN Bus Low</td></tr>' +
      '        <tr><td>11</td><td>Camera 8 Power Supply</td><td>-</td><td>22</td><td>CAN-H</td><td>CAN Bus High</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '  <h4 class="prod-detail-h4">C3030 HF 2×12 24-PIN Interface</h4>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <tbody>' +
      '        <tr><td>Serial No.</td><td>PIN No.</td><td>Serial No.</td><td>PIN No.</td></tr>' +
      '        <tr><td>1</td><td>Power Input</td><td>13</td><td>IO Output 1</td></tr>' +
      '        <tr><td>2</td><td>Power Ground</td><td>14</td><td>232-RX / 485_A2</td></tr>' +
      '        <tr><td>3</td><td>Relay Input</td><td>15</td><td>232-TX / 485_B2</td></tr>' +
      '        <tr><td>4</td><td>Relay Output</td><td>16</td><td>IO Input 3</td></tr>' +
      '        <tr><td>5</td><td>ACC Input</td><td>17</td><td>Infrared Signal</td></tr>' +
      '        <tr><td>6</td><td>IO Input 1</td><td>18</td><td>12V Seat Switch Output</td></tr>' +
      '        <tr><td>7</td><td>IO Input 2</td><td>19</td><td>12V Seat Switch Detection</td></tr>' +
      '        <tr><td>8</td><td>232-RX / 485A</td><td>20</td><td>12V/5V Output Ground / Speed Sensor Ground</td></tr>' +
      '        <tr><td>9</td><td>232-TX / 485B</td><td>21</td><td>12V Output Power Supply / Speed Sensor Power Supply</td></tr>' +
      '        <tr><td>10</td><td>Speaker SPK-P</td><td>22</td><td>5V Output Power Supply</td></tr>' +
      '        <tr><td>11</td><td>Speaker SPK-N</td><td>23</td><td>Speed Sensor Signal</td></tr>' +
      '        <tr><td>12</td><td>Microphone MIC-N</td><td>24</td><td>Microphone MIC-P</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>' +
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">2. Component Parts</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <tbody>' +
      '        <tr><td>Serial No.</td><td>Part Name</td><td>Image</td><td>Quantity</td><td>Remarks</td></tr>' +
      '        <tr><td>1</td><td>Main Unit</td><td><img src="products image/5-4-1.png" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Unit</td><td>With AI visual function and vehicle networking function</td></tr>' +
      '        <tr><td>2</td><td>Power Communication Cable</td><td><img src="products image/5-4-2.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Cable</td><td>24-PIN connector: Includes power positive/negative, ACC, relay input/output, 3 IO inputs, 3 IO outputs, RS232/RS485 interfaces, speaker interface, microphone interface, 12V output, 5V output, seat switch interface, and speed sensor interface</td></tr>' +
      '        <tr><td>3</td><td>Video Cable</td><td><img src="products image/5-4-3.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Cable</td><td>22-PIN connector: Includes 1-channel AHD HD video output, 6-channel AHD video input, RS485 interface, and CAN interface</td></tr>' +
      '        <tr><td>4</td><td>GPS Antenna</td><td><img src="products image/5-4-4.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Piece</td><td>Optional Accessory</td></tr>' +
      '        <tr><td>5</td><td>4G Antenna</td><td><img src="products image/5-4-5.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Piece</td><td>Optional Accessory</td></tr>' +
      '        <tr><td>6</td><td>Remote Control</td><td><img src="products image/5-4-6.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Piece</td><td>accessory</td></tr>' +
      '        <tr><td>7</td><td>Infrared Receiver (3PIN)</td><td><img src="products image/5-4-7.png" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Piece</td><td>accessory</td></tr>' +
      '        <tr><td>8</td><td>External Speaker</td><td><img src="products image/5-4-8.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 Piece</td><td>2W 8Ω，accessory</td></tr>' +
      '        <tr><td>9</td><td>Certificate of Conformity</td><td><img src="products image/5-4-9.jpg" style="width: 100px; display: block; margin: 0 auto;"></td><td>1 piece</td><td></td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>'
  },
  {
    id: "6",
    title: "Panoramic Mini Explosive-Proof Camera",
    image: "products image/products6.png",
    price: "¥ 8800.00",
    description: "Compact and rugged camera designed for hazardous environments. Resistant to dust, water, and impact.",
    features: ["Explosion Proof", "Miniature Design", "Waterproof IP69K", "Wide Angle Lens"],
    customBodyHtml:
      '<div class="prod-detail-section">' +
      '  <h2 class="prod-detail-h2">Panoramic Mini Explosive-Proof Camera</h2>' +
      '  <div class="prod-detail-figure" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; flex-wrap: nowrap;">' +
      '    <img src="products image/6-1.png" style="height: 300px; width: auto; max-width: 48%; object-fit: contain;" alt="Panoramic Mini Explosive-Proof Camera View 1">' +
      '    <img src="products image/6-2.png" style="height: 300px; width: auto; max-width: 48%; object-fit: contain;" alt="Panoramic Mini Explosive-Proof Camera View 2">' +
      '  </div>' +
      '  <h3 class="prod-detail-h3">Manufacturing Standards</h3>' +
      '  <ul class="prod-detail-list" style="list-style-type: disc; padding-left: 20px;">' +
      '    <li>GB3836.1-2010: General requirements for electrical equipment used in explosive gas atmospheres</li>' +
      '    <li>GB3836.2-2010: Explosion-proof type "d" for electrical equipment used in explosive gas atmospheres</li>' +
      '    <li>GB12476.1-2013: General requirements for electrical equipment used in combustible dust environments, enclosure protection type "tD"</li>' +
      '  </ul>' +
      '  <h3 class="prod-detail-h3">Certifications</h3>' +
      '  <ul class="prod-detail-list" style="list-style-type: disc; padding-left: 20px;">' +
      '    <li>Certification Authority: National Supervision and Inspection Center for Explosion-Proof Electrical Products (CNEX)</li>' +
      '    <li>Explosion-Proof Mark: ExdⅡCT6Gb/ExtD A21 IP68 T80℃</li>' +
      '  </ul>' +
      '  <h3 class="prod-detail-h3">Applicable Environments</h3>' +
      '  <p class="prod-detail-desc">Suitable for factories with explosive gas mixtures of groups ⅡA, ⅡB, ⅡC T1~T6, in zones 0, 1, and 2, as well as areas with combustible dust-air mixtures in zones 20, 21, and 22. Applicable in places such as petroleum, chemical industry, docks, oil depots, ships, drilling platforms, gas stations, mines, ports, aerospace, military, pharmaceuticals, steel, fireworks production, machinery, grain processing and storage, etc. Especially suitable for tankers, hazardous goods transport vehicles, fuel dispensers, small warehouses, chemical reagent laboratories, pharmaceutical workshops, explosion-proof elevators, etc., where size and weight are critical.</p>' +
      '  <h3 class="prod-detail-h3">Product Features</h3>' +
      '  <ul class="prod-detail-list" style="list-style-type: disc; padding-left: 20px;">' +
      '    <li>Compact and Lightweight: Flexible installation, compatible with GPS, vehicle DVR, dashcam, used as an image collection tool in hazardous materials logistics monitoring systems</li>' +
      '    <li>High-Definition Sensor: Equipped with the latest NVP2630+291 million HD image sensor, 1080P HD quality, supports AHD/effective resolution up to 1945*1097</li>' +
      '    <li>Enhanced Sensitivity: Minimum illumination down to color 0.001Lux@F1.2</li>' +
      '    <li>Wide Dynamic Range: Latest 4th generation wide dynamic technology, dynamic range greater than 75dB</li>' +
      '    <li>Automatic IR Cut: Day/night conversion with high-quality images, synchronized infrared lamp for excellent night images</li>' +
      '    <li>Explosion-Proof Dome: Aviation-grade high-strength polycarbonate, light transmittance over 93%</li>' +
      '    <li>Nano Invisible Wiper: Water-repellent, oil-repellent, dust-repellent</li>' +
      '    <li>High-Quality Construction: Precision-made from aviation-grade aluminum alloy or high-quality 304 stainless steel, explosion-proof, dust-proof, waterproof</li>' +
      '    <li>Durable Coating: Aluminum alloy surface with special anodizing for high-strength protective film, sturdy and colorfast; 304 stainless steel with slight corrosion resistance</li>' +
      '    <li>Smart 3D Design: Convenient for installation at any angle, ensuring clear horizontal images after adjustment</li>' +
      '    <li>Clear Image: Advanced luminance separation, signal filtering, 3D noise reduction technology for higher image clarity and better image reproduction</li>' +
      '    <li>High Integration: Front-end chip integrates ISP and TX, more economical, more stable, and lower power consumption</li>' +
      '    <li>Open Standards: Compatible with third-party products, accelerating market penetration</li>' +
      '    <li>Zero Delay: Real-time, high-fidelity transmission without encoding compression</li>' +
      '    <li>Long Transmission Distance: Up to 500 meters with ordinary 75-3 coaxial cable, 300 meters with other cables</li>' +
      '    <li>Good Compatibility: Compatible with standard D1/960H, and analog peripheral devices (including distributors, matrices, etc.)</li>' +
      '    <li>Easy Operation: Supports OSD menu settings for customizable configuration</li>' +
      '  </ul>' +
      '  <h3 class="prod-detail-h3">Technical Parameters</h3>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead><tr><th>Model</th><th>Certification</th></tr></thead>' +
      '      <tbody>' +
      '        <tr><td colspan="2" style="text-align:center; font-weight:bold;">Certification</td></tr>' +
      '        <tr><td>Explosion-Proof Mark</td><td>ExdⅡCT6Gb/ExtD A21 IP68 T80℃</td></tr>' +
      '        <tr><td>Explosion-Proof Certificate Number</td><td>CNEx16.2999</td></tr>' +
      '        <tr><td colspan="2" style="text-align:center; font-weight:bold;">Mechanical Properties</td></tr>' +
      '        <tr><td>Material</td><td>Aluminum alloy or 304 stainless steel</td></tr>' +
      '        <tr><td>Surface Treatment</td><td>Anodized aluminum or original stainless steel, optional electro-polishing</td></tr>' +
      '        <tr><td>Protection Level</td><td>IP68</td></tr>' +
      '        <tr><td>Interface Specification</td><td>G-1/2"</td></tr>' +
      '        <tr><td>Weight</td><td>≤0.8kg (aluminum alloy), ≤1.5kg (stainless steel)</td></tr>' +
      '        <tr><td>Installation Method</td><td>Ceiling or wall-mounted</td></tr>' +
      '        <tr><td colspan="2" style="text-align:center; font-weight:bold;">Electrical Properties</td></tr>' +
      '        <tr><td>Input Voltage</td><td>DC12V</td></tr>' +
      '        <tr><td>Working Current</td><td>≤1A</td></tr>' +
      '        <tr><td colspan="2" style="text-align:center; font-weight:bold;">Camera</td></tr>' +
      '        <tr><td>Image Sensor</td><td>1/2.8 IMX291</td></tr>' +
      '        <tr><td>Resolution</td><td>2 megapixels (HDCVI, HDTVI, or AHD format)</td></tr>' +
      '        <tr><td>Lens</td><td>1.7mm</td></tr>' +
      '        <tr><td>Signal-to-Noise Ratio</td><td>≥41dB</td></tr>' +
      '        <tr><td>Minimum Illumination</td><td>0.01LUX</td></tr>' +
      '        <tr><td>Wavelength</td><td>850nm</td></tr>' +
      '        <tr><td>Switch</td><td>Auto (≤10Lux)</td></tr>' +
      '        <tr><td>Electrical Connection</td><td>Composite cable (75-3 or 75-5 video cable, power cable)</td></tr>' +
      '        <tr><td colspan="2" style="text-align:center; font-weight:bold;">Environmental Conditions</td></tr>' +
      '        <tr><td>Ambient Temperature</td><td>(-30℃, +70℃)</td></tr>' +
      '        <tr><td>Atmospheric Pressure</td><td>80-106KPa</td></tr>' +
      '        <tr><td>Relative Humidity</td><td>≤95%RH (+25℃)</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '  <h3 class="prod-detail-h3">Disclaimer：</h3>' +
      '  <ol class="prod-detail-list" style="list-style-type: decimal; padding-left: 20px;">' +
      '    <li>The company reserves the right to modify product design and specifications without prior notice.</li>' +
      '    <li>This document is copyrighted by Shenzhen Tianxuntong Technology Co., Ltd. No part of this document may be reproduced or copied in any form or by any means without the permission of Shenzhen Tianxuntong Technology Co., Ltd.</li>' +
      '  </ol>' +
      '</div>'
  },
  {
    id: "7",
    title: "360° Panoramic Safety Driving Assistance System",
    image: "products image/products7.png",
    price: "¥ 8800.00",
    description: "Full panoramic view with no blind spots. 4-Channel HD recording and no-light night vision capabilities.",
    features: ["Full Panorama", "No Blind Spot", "4-Channel HD Recording", "No-Light Night Vision"],
    extraSideInfo:
      '<div class="prod-detail-extra-info" style="margin-top: 20px; color: #4b5563; font-size: 0.9rem; line-height: 1.6;">' +
      '  <div><span style="font-weight: bold;">Type:</span> Safe Driving Assistance System</div>' +
      '  <div><span style="font-weight: bold;">Brand:</span> Eagle Drive Technology</div>' +
      '  <div><span style="font-weight: bold;">Model:</span> EH406B</div>' +
      '</div>',
    customBodyHtml:
      '<div class="prod-detail-section">' +
      '  <h3 class="prod-detail-h3">1. Introduction</h3>' +
      '  <p>The EH406B is a 360° panoramic driving assistance system designed for commercial vehicles such as buses, trucks, engineering vehicles, and special-purpose vehicles. The system uses four ultra-wide-angle, high-definition night vision cameras installed around the vehicle (front, rear, left, and right) to capture real-time high-definition video of the surrounding area. This video is processed through distortion correction, perspective transformation, image stitching, and fusion to create a seamless 360° bird\'s-eye view, which is displayed on the in-vehicle screen to provide comprehensive driving assistance. This product helps drivers eliminate visual blind spots around the vehicle, significantly reducing the probability of traffic accidents. Additionally, the system features 4-channel high-definition recording, providing valuable evidence and accident reconstruction in the event of traffic incidents or emergencies.</p>' +
      '  <div class="prod-detail-figure">' +
      '    <img src="products image/7-1.png" style="max-width: 100%; height: auto;" alt="EH406B System Structure">' +
      '    <p class="prod-detail-figcap">Figure 1: EH406B System Structure</p>' +
      '  </div>' +
      '  <h3 class="prod-detail-h3">2. Features</h3>' +
      '  <h4 class="prod-detail-h4">2.1 Panoramic Imaging</h4>' +
      '  <p>Four ultra-wide-angle high-definition night vision cameras are installed at the front, rear, left, and right of the vehicle, capturing real-time video of the surrounding area. The video is processed through distortion correction, perspective transformation, and panoramic stitching to create a seamless 360° panoramic image, as shown in Figure 2.</p>' +
      '  <div class="prod-detail-figure">' +
      '    <img src="products image/7-2.png" style="max-width: 100%; height: auto;" alt="Panoramic Stiching Diagram">' +
      '    <p class="prod-detail-figcap">Figure 2: Panoramic Stiching Diagram</p>' +
      '  </div>' +
      '  <h4 class="prod-detail-h4">2.2 External Single View</h4>' +
      '  <p>In addition to providing panoramic view assistance, the system also offers individual front, rear, left, and right exterior views. These single views automatically switch based on the vehicle\'s driving status, as shown in Figure 3.</p>' +
      '  <div class="prod-detail-figure" style="display: flex; flex-direction: row; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: nowrap; max-width: 800px; margin-left: auto; margin-right: auto;">' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-3-1.png" style="width: 100%; height: auto; object-fit: contain;" alt="Normal driving or parking, front view">' +
      '      <p class="prod-detail-figcap">（a）Normal driving or parking, front view</p>' +
      '    </div>' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-3-2.png" style="width: 100%; height: auto; object-fit: contain;" alt="Reversing, rear view">' +
      '      <p class="prod-detail-figcap">（b）Reversing, rear view</p>' +
      '    </div>' +
      '  </div>' +
      '  <div class="prod-detail-figure" style="display: flex; flex-direction: row; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: nowrap; max-width: 800px; margin-left: auto; margin-right: auto;">' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-4-1.png" style="width: 100%; height: auto; object-fit: contain;" alt="Left turn signal, left view">' +
      '      <p class="prod-detail-figcap">（c）Left turn signal, left view</p>' +
      '    </div>' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-4-2.png" style="width: 100%; height: auto; object-fit: contain;" alt="Left turn signal, left view">' +
      '      <p class="prod-detail-figcap">（d）Left turn signal, left view</p>' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-figcap">Figure 3: Panoramic + Single View Display</p>' +
      '  <h4 class="prod-detail-h4">2.3 High-Definition NIght Vision</h4>' +
      '  <p>The cameras all use high-sensitivity sensors, allowing them to maintain high-definition image quality and accurate color reproduction even in low-light conditions such as on cloudy days or at night, as shown in Figure 4.</p>' +
      '  <div class="prod-detail-figure" style="display: flex; flex-direction: row; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: nowrap; max-width: 800px; margin-left: auto; margin-right: auto;">' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-5-1.png" style="width: 100%; height: 220px; object-fit: cover;" alt="High-Definition Night Vision 1">' +
      '    </div>' +
      '    <div style="flex: 1; text-align: center;">' +
      '      <img src="products image/7-5-2.png" style="width: 100%; height: 220px; object-fit: cover;" alt="High-Definition Night Vision 2">' +
      '    </div>' +
      '  </div>' +
      '  <p class="prod-detail-figcap">Figure 4: High-Definition Night Vision</p>' +
      '  <h4 class="prod-detail-h4">2.4 Accurate Guiding Lines</h4>' +
      '  <p>The system uses the CAN bus protocol to obtain and interpret the steering wheel angle. It then employs built-in algorithms to calculate and draw accurate guiding lines in real-time on the panoramic view, providing helpful references for driving and parking, as shown in Figure 5(a).</p>' +
      '  <div class="prod-detail-figure">' +
      '    <img src="products image/7-6.png" style="max-width: 100%; height: auto;" alt="Smart Guiding Lines">' +
      '    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 10px;">' +
      '      <span style="font-size: 0.8em;">（a）Smart Guiding Lines</span>' +
      '      <span style="font-size: 0.8em;">(b) Calibration Procedure</span>' +
      '      <span style="font-size: 0.8em;">（c）Reverse Parking Guide Lines</span>' +
      '      <span style="font-size: 0.8em;">（d）Radar Alert</span>' +
      '    </div>' +
      '    <p class="prod-detail-figcap">Figure 5: Smart Guiding Lines, Calibration Procedure, Reverse Parking Guide Lines, and Radar Alerts</p>' +
      '  </div>' +
      '  <h4 class="prod-detail-h4">2.5 Reverse Parking Guide Lines</h4>' +
      '  <p>During reverse maneuvers, the system receives the reverse signal and displays reverse parking guide lines in the rear area of the panoramic view, providing precise guidance for the driver, as shown in Figure 5(b).</p>' +
      '  <h4 class="prod-detail-h4">2.6 High-Definition Recording</h4>' +
      '  <p>The system supports continuous recording of 4 channels of panoramic high-definition video, with the ability to protect key recordings. Recorded videos can be played back locally or on a PC.</p>' +
      '  <h4 class="prod-detail-h4">2.7 Video Storage</h4>' +
      '  <p>The system includes a USB port for external storage devices such as USB flash drives, with support up to 2TB.</p>' +
      '  <h3 class="prod-detail-h3">3. Technical Specifications</h3>' +
      '  <p class="prod-detail-figcap" style="text-align: left; font-weight: bold; margin-bottom: 10px;">Figure 3-1: Technical Parameters</p>' +
      '  <div class="prod-detail-table-wrap">' +
      '    <table class="prod-detail-table">' +
      '      <thead>' +
      '        <tr>' +
      '          <th style="width: 30%;">Name</th>' +
      '          <th>Parameter Description</th>' +
      '        </tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr><td>Model</td><td>EH406B</td></tr>' +
      '        <tr><td>Dimensions</td><td>Bare Machine：Gun Metal Color，150*101*27 mm</td></tr>' +
      '        <tr><td>Main Chip</td><td>HiSilicon HI3520DV300，ARM Cortex A7 @Max. 800MHz，H.264</td></tr>' +
      '        <tr><td>Operating System</td><td>Linux</td></tr>' +
      '        <tr><td>Input Voltage</td><td>Supports DC 9-36V，Operating Voltage：DC24V</td></tr>' +
      '        <tr><td>Average Power</td><td>Working 6W，Standby 0.1W</td></tr>' +
      '        <tr><td>Temperature & Humidity</td><td>-40-85℃，10%~90%</td></tr>' +
      '        <tr><td>Input</td><td>Supports 4-Channels AHD 720 Video Input</td></tr>' +
      '        <tr><td>Output</td><td>Supports 2-Channels CVBS Ouput</td></tr>' +
      '        <tr><td>Video Format</td><td>H.264</td></tr>' +
      '        <tr><td>Storage</td><td>Supports USB Flash Drive，Maximum Sorage Capacity 2TB</td></tr>' +
      '        <tr><td>Camera</td><td>Low-Light Night Vision，1.3 Million Effective Pixels，AHD720P Output，Four-Core Aviation Connector Interface</td></tr>' +
      '        <tr><td>External Interfaces</td><td>CAN Interface，Power Interface，Trigger Interface, Button Interface，Infrared Interface</td></tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>'
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
      (p.extraSideInfo ? p.extraSideInfo : '') +
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
