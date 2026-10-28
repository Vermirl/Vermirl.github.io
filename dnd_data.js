// CCNA 200-301 Drag and Drop Questions Dataset (59 Questions)
// Generated for Vermirl CCNA Practice Platform

window.CCNA_DND_DATA = [
  {
    "id": 1,
    "title": "Câu 01: Đối Chiếu Tiền Tố Bảng Định Tuyến OSPF",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the prefix lengths from the left onto the corresponding prefixes on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các độ dài tiền tố (Subnet Mask) từ bên trái vào các tiền tố mạng tương ứng ở bên phải theo bảng định tuyến.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q01_a.png",
    "question_image": "images/dnd/dnd_q01_b.png",
    "answer_image": "images/dnd/dnd_q01_c.png",
    "source_items": [
      {
        "id": "q1-m21",
        "text_en": "255.255.248.0 (/21)",
        "text_vi": "255.255.248.0 (/21)"
      },
      {
        "id": "q1-m25",
        "text_en": "255.255.255.128 (/25)",
        "text_vi": "255.255.255.128 (/25)"
      },
      {
        "id": "q1-m27",
        "text_en": "255.255.255.224 (/27)",
        "text_vi": "255.255.255.224 (/27)"
      },
      {
        "id": "q1-m28",
        "text_en": "255.255.255.240 (/28)",
        "text_vi": "255.255.255.240 (/28)"
      },
      {
        "id": "q1-m29",
        "text_en": "255.255.255.248 (/29)",
        "text_vi": "255.255.255.248 (/29)"
      },
      {
        "id": "q1-m30",
        "text_en": "255.255.255.252 (/30)",
        "text_vi": "255.255.255.252 (/30)"
      }
    ],
    "drop_zones": [
      {
        "id": "q1-z1",
        "label_en": "10.10.13.0/25",
        "label_vi": "Mạng 10.10.13.0/25",
        "target_ids": [
          "q1-m25"
        ]
      },
      {
        "id": "q1-z2",
        "label_en": "10.10.13.144/28",
        "label_vi": "Mạng 10.10.13.144/28",
        "target_ids": [
          "q1-m28"
        ]
      },
      {
        "id": "q1-z3",
        "label_en": "10.10.13.160/29",
        "label_vi": "Mạng 10.10.13.160/29",
        "target_ids": [
          "q1-m29"
        ]
      },
      {
        "id": "q1-z4",
        "label_en": "209.165.200.224/27",
        "label_vi": "Mạng 209.165.200.224/27",
        "target_ids": [
          "q1-m27"
        ]
      }
    ],
    "explanation": "Cách chuyển đổi nhanh tiền tố CIDR sang Subnet Mask:\n- /25 = 255.255.255.128 (128 bit)\n- /27 = 255.255.255.224 (128+64+32)\n- /28 = 255.255.255.240 (128+64+32+16)\n- /29 = 255.255.255.248 (128+64+32+16+8)\n- /30 = 255.255.255.252 (bước nhảy 4)"
  },
  {
    "id": 2,
    "title": "Câu 02: So Sánh Công Cụ Quản Lý Cấu Hình (Ansible / Puppet / Chef)",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the configuration management tools from the left onto the descriptions on the right.",
    "prompt_vi": "Kéo thả tên các công cụ quản lý cấu hình tự động từ bên trái vào đúng mô tả đặc tính ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q02_a.png",
    "answer_image": "images/dnd/dnd_q02_b.png",
    "source_items": [
      {
        "id": "q2-ansible",
        "text_en": "Ansible",
        "text_vi": "Ansible"
      },
      {
        "id": "q2-puppet",
        "text_en": "Puppet",
        "text_vi": "Puppet"
      },
      {
        "id": "q2-chef",
        "text_en": "Chef",
        "text_vi": "Chef"
      }
    ],
    "drop_zones": [
      {
        "id": "q2-z1",
        "label_en": "Executes modules via SSH by default and uses YAML",
        "label_vi": "Thực thi module qua SSH mặc định và dùng ngôn ngữ YAML",
        "target_ids": [
          "q2-ansible"
        ]
      },
      {
        "id": "q2-z2",
        "label_en": "Uses push model without requiring agents on managed nodes",
        "label_vi": "Dùng mô hình Push, không cần cài agent trên thiết bị đích",
        "target_ids": [
          "q2-ansible"
        ]
      },
      {
        "id": "q2-z3",
        "label_en": "Uses TCP port 8140 and declarative manifests with agents",
        "label_vi": "Cần cài agent trên máy con, dùng manifest khai báo và cổng TCP 8140",
        "target_ids": [
          "q2-puppet"
        ]
      },
      {
        "id": "q2-z4",
        "label_en": "Uses Cookbooks and Recipes written in Ruby DSL with agents",
        "label_vi": "Dùng mô hình Cookbooks và Recipes viết bằng ngôn ngữ Ruby DSL",
        "target_ids": [
          "q2-chef"
        ]
      }
    ],
    "explanation": "Bí quyết nhớ nhanh cho CCNA:\n- **Ansible**: Agentless (không cần agent), chạy qua SSH, viết bằng YAML (Playbooks).\n- **Puppet**: Agent-based, mô hình Pull, dùng ngôn ngữ Manifests (Puppet DSL).\n- **Chef**: Agent-based, mô hình Pull, dùng 'Cookbooks/Recipes' viết bằng Ruby."
  },
  {
    "id": 3,
    "title": "Câu 03: Thành Phần Bảng Định Tuyến OSPF",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the routing components from the left onto the corresponding categories on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các giá trị thành phần bảng định tuyến từ bên trái vào đúng danh mục ở bên phải theo dòng định tuyến OSPF.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q03_a.png",
    "question_image": "images/dnd/dnd_q03_b.png",
    "answer_image": "images/dnd/dnd_q03_c.png",
    "source_items": [
      {
        "id": "q3-p28",
        "text_en": "/28",
        "text_vi": "/28"
      },
      {
        "id": "q3-p29",
        "text_en": "/29",
        "text_vi": "/29"
      },
      {
        "id": "q3-ad90",
        "text_en": "90",
        "text_vi": "90"
      },
      {
        "id": "q3-ad110",
        "text_en": "110",
        "text_vi": "110"
      },
      {
        "id": "q3-c25",
        "text_en": "25",
        "text_vi": "25"
      },
      {
        "id": "q3-c40",
        "text_en": "40",
        "text_vi": "40"
      }
    ],
    "drop_zones": [
      {
        "id": "q3-z1",
        "label_en": "Subnet Prefix",
        "label_vi": "Tiền tố mạng con (Subnet Prefix)",
        "target_ids": [
          "q3-p29"
        ]
      },
      {
        "id": "q3-z2",
        "label_en": "Administrative Distance",
        "label_vi": "Khoảng cách quản trị (AD)",
        "target_ids": [
          "q3-ad110"
        ]
      },
      {
        "id": "q3-z3",
        "label_en": "Metric / Cost",
        "label_vi": "Độ đo chi phí (Metric / Cost)",
        "target_ids": [
          "q3-c40"
        ]
      }
    ],
    "explanation": "Trong sơ đồ lệnh `show ip route`, dòng định tuyến OSPF có dạng:\n`O 10.10.10.0/29 [110/40] via 10.10.10.1`\n- **Subnet Prefix**: `/29`\n- **Administrative Distance (AD)**: `110` (đặc trưng của giao thức OSPF, số đứng trước dấu gạch chéo)\n- **Metric / Cost**: `40` (số đứng sau dấu gạch chéo)."
  },
  {
    "id": 4,
    "title": "Câu 04: Mạng Điều Khiển Tập Trung (SDN) vs Mạng Truyền Thống",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the network architecture characteristics from the left onto the architecture types on the right.",
    "prompt_vi": "Kéo thả các đặc điểm kiến trúc mạng từ bên trái vào đúng loại kiến trúc tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q04_a.png",
    "answer_image": "images/dnd/dnd_q04_b.png",
    "source_items": [
      {
        "id": "q4-c1",
        "text_en": "This type deploys a consistent configuration across multiple devices",
        "text_vi": "Triển khai cấu hình đồng nhất trên nhiều thiết bị tự động"
      },
      {
        "id": "q4-c2",
        "text_en": "Southbound APIs are used to apply configurations",
        "text_vi": "Dùng Southbound API để đẩy cấu hình xuống thiết bị mạng"
      },
      {
        "id": "q4-t1",
        "text_en": "This type uses a distributed control plane",
        "text_vi": "Sử dụng mặt phẳng điều khiển phân tán trên từng thiết bị"
      },
      {
        "id": "q4-t2",
        "text_en": "A distributed control plane is needed and devices configured manually",
        "text_vi": "Cần mặt phẳng điều khiển phân tán và cấu hình thủ công từng thiết bị"
      }
    ],
    "drop_zones": [
      {
        "id": "q4-controller",
        "label_en": "Controller-Based Networking",
        "label_vi": "Mạng Điều Khiển Tập Trung (SDN Controller)",
        "target_ids": [
          "q4-c1",
          "q4-c2"
        ]
      },
      {
        "id": "q4-traditional",
        "label_en": "Traditional Networking",
        "label_vi": "Mạng Truyền Thống (Traditional)",
        "target_ids": [
          "q4-t1",
          "q4-t2"
        ]
      }
    ],
    "explanation": "- **Controller-Based (SDN)**: Tập trung mặt phẳng điều khiển (Control Plane) về Controller. Tự động triển khai cấu hình đồng bộ xuống hạ tầng thông qua Southbound API (NETCONF, RESTCONF, OpenFlow).\n- **Traditional Networking**: Mỗi thiết bị mạng (Router/Switch) tự tính toán Control Plane riêng biệt (phân tán), cấu hình thủ công từng máy qua CLI console."
  },
  {
    "id": 5,
    "title": "Câu 05: Phân Biệt Cáp Đồng vs Cáp Quang Đơn Mốt (SMF)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the cable characteristics from the left onto the corresponding cable types on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào loại cáp tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q05_a.png",
    "answer_image": "images/dnd/dnd_q05_b.png",
    "source_items": [
      {
        "id": "q5-cu1",
        "text_en": "supplies conduit for POE implementations",
        "text_vi": "Có khả năng truyền tải nguồn điện cho PoE (Power over Ethernet)"
      },
      {
        "id": "q5-cu2",
        "text_en": "is easy to tap into and obtain secure information",
        "text_vi": "Dễ bị nghe lén / can thiệp vật lý để đánh cắp dữ liệu"
      },
      {
        "id": "q5-sm1",
        "text_en": "has a core diameter of 9 microns",
        "text_vi": "Đường kính lõi sợi quang là 9 micromet (9 µm)"
      },
      {
        "id": "q5-sm2",
        "text_en": "used for DWDM optics",
        "text_vi": "Được dùng cho công nghệ quang bước sóng dài và ghép kênh DWDM"
      }
    ],
    "drop_zones": [
      {
        "id": "q5-copper",
        "label_en": "Copper Cabling",
        "label_vi": "Cáp Đồng (Copper / Twisted-Pair)",
        "target_ids": [
          "q5-cu1",
          "q5-cu2"
        ]
      },
      {
        "id": "q5-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q5-sm1",
          "q5-sm2"
        ]
      }
    ],
    "explanation": "- **Cáp đồng (Copper)**: Có dây kim loại dẫn điện nên cấp nguồn được cho PoE (IP Phone, Camera, AP), nhưng phát xạ sóng điện từ nên dễ bị nghe trộm (tap vào cáp).\n- **Cáp quang đơn mốt (SMF)**: Lõi siêu nhỏ 9 µm, truyền bằng tia laser đơn mode, suy hao cực thấp, chuyên dùng cho cự ly xa và mạng truyền dẫn DWDM."
  },
  {
    "id": 6,
    "title": "Câu 06: Đặc Tính Tầng Vận Chuyển: TCP vs UDP (Phần 1)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the transport layer characteristics from the left onto the corresponding protocols on the right.",
    "prompt_vi": "Kéo thả các đặc điểm của tầng vận chuyển từ bên trái vào giao thức TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q06_a.png",
    "answer_image": "images/dnd/dnd_q06_b.png",
    "source_items": [
      {
        "id": "q6-t1",
        "text_en": "optimizes transmission rates to receiver",
        "text_vi": "Tối ưu hóa tốc độ truyền tải phù hợp với bên nhận (Flow Control)"
      },
      {
        "id": "q6-t2",
        "text_en": "controls connections between sender and receiver",
        "text_vi": "Kiểm soát thiết lập kết nối chặt chẽ giữa bên gửi và bên nhận"
      },
      {
        "id": "q6-t3",
        "text_en": "guarantees packet delivery",
        "text_vi": "Đảm bảo truyền gói tin tin cậy (có gói tin ACK xác nhận)"
      },
      {
        "id": "q6-u1",
        "text_en": "capable of sending multicast transmissions",
        "text_vi": "Có khả năng truyền phát gói tin dạng Multicast / Broadcast"
      },
      {
        "id": "q6-u2",
        "text_en": "transmits live and real-time data",
        "text_vi": "Chuyên dùng truyền tải dữ liệu trực tiếp và thời gian thực (VoIP, Video)"
      },
      {
        "id": "q6-u3",
        "text_en": "reduces end-to-end delays using small packets",
        "text_vi": "Giảm độ trễ đầu cuối bằng cách dùng header nhỏ và truyền nhanh"
      }
    ],
    "drop_zones": [
      {
        "id": "q6-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q6-t1",
          "q6-t2",
          "q6-t3"
        ]
      },
      {
        "id": "q6-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q6-u1",
          "q6-u2",
          "q6-u3"
        ]
      }
    ],
    "explanation": "- **TCP**: Hướng kết nối (Connection-oriented), bắt tay 3 bước, có xác nhận ACK, kiểm soát lưu lượng (Flow Control / Windowing) tránh làm nghẽn máy nhận.\n- **UDP**: Phi kết nối (Connectionless), không ACK, header chỉ 8 byte (so với 20 byte của TCP), độ trễ cực thấp, hỗ trợ Multicast/Broadcast."
  },
  {
    "id": 7,
    "title": "Câu 07: Phân Loại Địa Chỉ IPv6 (Multicast & Link-Local)",
    "category": "IP Connectivity",
    "prompt_en": "Drag and drop the IPv6 address types from the left onto the corresponding descriptions on the right.",
    "prompt_vi": "Kéo thả các đặc điểm và vai trò của địa chỉ IPv6 từ bên trái vào đúng loại địa chỉ ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q07_a.png",
    "answer_image": "images/dnd/dnd_q07_b.png",
    "source_items": [
      {
        "id": "q7-m1",
        "text_en": "provides one-to-many communications",
        "text_vi": "Cung cấp hình thức truyền thông một-đến-nhiều (one-to-many)"
      },
      {
        "id": "q7-m2",
        "text_en": "sends packets to a group address rather than a single address",
        "text_vi": "Gửi gói tin đến một địa chỉ nhóm thay vì một máy cụ thể"
      },
      {
        "id": "q7-l1",
        "text_en": "serves as the routing next-hop in an IGP",
        "text_vi": "Đóng vai trò là địa chỉ next-hop trong các giao thức định tuyến IGP (như OSPFv3)"
      },
      {
        "id": "q7-l2",
        "text_en": "confined to a single link",
        "text_vi": "Chỉ có phạm vi hiệu lực cục bộ trong một liên kết mạng duy nhất"
      }
    ],
    "drop_zones": [
      {
        "id": "q7-multicast",
        "label_en": "Multicast Address (FF00::/8)",
        "label_vi": "Địa chỉ Multicast IPv6 (FF00::/8)",
        "target_ids": [
          "q7-m1",
          "q7-m2"
        ]
      },
      {
        "id": "q7-linklocal",
        "label_en": "Link-Local Address (FE80::/10)",
        "label_vi": "Địa chỉ Link-Local IPv6 (FE80::/10)",
        "target_ids": [
          "q7-l1",
          "q7-l2"
        ]
      }
    ],
    "explanation": "- **Multicast (FF00::/8)**: Gửi cho một nhóm thiết bị đã đăng ký tham gia nhóm (one-to-many), thay thế hoàn toàn cho Broadcast trong IPv6.\n- **Link-Local (FE80::/10)**: Tự động tạo trên mọi cổng kích hoạt IPv6, không bị router chuyển tiếp ra ngoài (chỉ trong 1 link), dùng làm địa chỉ next-hop cho OSPFv3/EIGRPv6."
  },
  {
    "id": 8,
    "title": "Câu 08: Chọn Đường Bảng Định Tuyến OSPF (Longest Prefix Match)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. OSPF is running between Site A and Site B. Drag and drop the destination IP addresses from the left onto the destination next-hop interfaces on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Mạng đang chạy OSPF giữa Site A và Site B. Kéo thả các địa chỉ IP đích từ bên trái vào đúng cổng ra (interface) ở bên phải theo quy tắc tiền tố dài nhất.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q08_a.png",
    "question_image": "images/dnd/dnd_q08_a.png",
    "answer_image": "images/dnd/dnd_q08_b.png",
    "source_items": [
      {
        "id": "q8-ip1",
        "text_en": "10.10.10.16",
        "text_vi": "10.10.10.16"
      },
      {
        "id": "q8-ip2",
        "text_en": "10.10.13.129",
        "text_vi": "10.10.13.129"
      },
      {
        "id": "q8-ip3",
        "text_en": "194.0.100.128",
        "text_vi": "194.0.100.128"
      }
    ],
    "drop_zones": [
      {
        "id": "q8-fa03",
        "label_en": "FastEthernet0/3",
        "label_vi": "Cổng FastEthernet0/3 (khớp mạng 10.10.10.16/28)",
        "target_ids": [
          "q8-ip1"
        ]
      },
      {
        "id": "q8-fa02",
        "label_en": "FastEthernet0/2",
        "label_vi": "Cổng FastEthernet0/2 (khớp mạng 10.10.13.128/25)",
        "target_ids": [
          "q8-ip2"
        ]
      },
      {
        "id": "q8-fa04",
        "label_en": "FastEthernet0/4",
        "label_vi": "Cổng FastEthernet0/4 (đi qua Default Route 0.0.0.0/0)",
        "target_ids": [
          "q8-ip3"
        ]
      }
    ],
    "explanation": "Quy tắc định tuyến cơ bản của Cisco: **Longest Prefix Match**:\n1. Địa chỉ `10.10.10.16` khớp với route `10.10.10.16/28` -> Đi ra cổng `FastEthernet0/3`.\n2. Địa chỉ `10.10.13.129` khớp với route `10.10.13.128/25` -> Đi ra cổng `FastEthernet0/2`.\n3. Địa chỉ `194.0.100.128` không khớp mạng nào cụ thể nên đi theo tuyến mặc định `0.0.0.0/0` -> Đi ra cổng `FastEthernet0/4`."
  },
  {
    "id": 9,
    "title": "Câu 09: 5 Đặc Tính Điện Toán Đám Mây Theo Chuẩn NIST",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the cloud-computing components from the left onto the correct descriptions on the right.",
    "prompt_vi": "Kéo thả các đặc tính của điện toán đám mây từ bên trái vào đúng định nghĩa chuẩn NIST ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q09_a.png",
    "answer_image": "images/dnd/dnd_q09_b.png",
    "source_items": [
      {
        "id": "q9-ondemand",
        "text_en": "on-demand self-service",
        "text_vi": "on-demand self-service (Tự phục vụ theo nhu cầu)"
      },
      {
        "id": "q9-measured",
        "text_en": "measured service",
        "text_vi": "measured service (Đo lường & tính cước chi tiết)"
      },
      {
        "id": "q9-pooling",
        "text_en": "resource pooling",
        "text_vi": "resource pooling (Gộp chung tài nguyên)"
      },
      {
        "id": "q9-elasticity",
        "text_en": "rapid elasticity",
        "text_vi": "rapid elasticity (Độ co giãn đàn hồi nhanh)"
      },
      {
        "id": "q9-network",
        "text_en": "broad network access",
        "text_vi": "broad network access (Truy cập mạng diện rộng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q9-z1",
        "label_en": "The consumer can choose when to start or stop using the service.",
        "label_vi": "Khách hàng có thể tự khởi động hoặc ngắt dịch vụ bất kỳ lúc nào mà không cần nhân viên hỗ trợ.",
        "target_ids": [
          "q9-ondemand"
        ]
      },
      {
        "id": "q9-z2",
        "label_en": "The provider can bill the consumer in accordance with the level of usage.",
        "label_vi": "Nhà cung cấp tính cước minh bạch chính xác theo mức dung lượng/thời gian khách hàng thực tế sử dụng.",
        "target_ids": [
          "q9-measured"
        ]
      },
      {
        "id": "q9-z3",
        "label_en": "The provider allocates CPU, memory, and disk from its shared compute resources to multiple customers.",
        "label_vi": "Nhà cung cấp gom chung CPU, RAM, ổ đĩa và cấp phát linh hoạt cho nhiều khách hàng (Multi-tenant).",
        "target_ids": [
          "q9-pooling"
        ]
      },
      {
        "id": "q9-z4",
        "label_en": "The resource pool can expand quickly to meet demand.",
        "label_vi": "Hệ thống tự động tăng giảm tài nguyên ngay tức thì khi nhu cầu tải tăng vọt.",
        "target_ids": [
          "q9-elasticity"
        ]
      },
      {
        "id": "q9-z5",
        "label_en": "The service is available from many types of devices and networks.",
        "label_vi": "Dịch vụ có thể truy cập thuận tiện từ mọi thiết bị (laptop, điện thoại, tablet) qua mạng.",
        "target_ids": [
          "q9-network"
        ]
      }
    ],
    "explanation": "5 đặc tính cốt lõi của Cloud Computing theo viện tiêu chuẩn NIST Hoa Kỳ (NIST SP 800-145):\n1. **On-demand self-service**: Khách tự mua, bật/tắt dịch vụ qua web portal.\n2. **Broad network access**: Truy cập qua Internet từ bất cứ đâu, đa thiết bị.\n3. **Resource pooling**: Chia sẻ kho tài nguyên vật lý chung cho nhiều khách hàng.\n4. **Rapid elasticity**: Co giãn tức thì theo tải (scale in / scale out).\n5. **Measured service**: Dùng bao nhiêu trả bấy nhiêu (Pay-as-you-go)."
  },
  {
    "id": 10,
    "title": "Câu 10: Đặc Tính Cáp Đồng vs Cáp Quang",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto the cable type on the right.",
    "prompt_vi": "Kéo thả đặc tính môi trường truyền dẫn từ bên trái vào đúng loại cáp tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q10_a.png",
    "answer_image": "images/dnd/dnd_q10_b.png",
    "source_items": [
      {
        "id": "q10-cu1",
        "text_en": "transmits data in the form of electronic signals",
        "text_vi": "Truyền tín hiệu dữ liệu dưới dạng xung điện"
      },
      {
        "id": "q10-cu2",
        "text_en": "supplies conduit for POE implementations",
        "text_vi": "Cung cấp kênh truyền dẫn cho công nghệ cấp nguồn PoE"
      },
      {
        "id": "q10-fo1",
        "text_en": "used for high-throughput over long distances",
        "text_vi": "Băng thông cực cao qua cự ly khoảng cách rất xa"
      },
      {
        "id": "q10-fo2",
        "text_en": "transmits signals using pulses of light",
        "text_vi": "Truyền tín hiệu dữ liệu bằng các xung ánh sáng"
      }
    ],
    "drop_zones": [
      {
        "id": "q10-copper",
        "label_en": "Copper Cabling",
        "label_vi": "Cáp Đồng (Copper)",
        "target_ids": [
          "q10-cu1",
          "q10-cu2"
        ]
      },
      {
        "id": "q10-fiber",
        "label_en": "Fiber Optic Cabling",
        "label_vi": "Cáp Quang (Fiber Optic)",
        "target_ids": [
          "q10-fo1",
          "q10-fo2"
        ]
      }
    ],
    "explanation": "- **Cáp đồng**: Dẫn điện, truyền xung điện áp, có thể mang nguồn điện một chiều cho thiết bị PoE (802.3af/at/bt).\n- **Cáp quang**: Lõi thủy tinh/nhựa, truyền bằng xung ánh sáng (Laser/LED), hoàn toàn miễn nhiễm với sóng điện từ EMI, cự ly hàng chục km."
  },
  {
    "id": 11,
    "title": "Câu 11: Đặc Tính Tầng Vận Chuyển: TCP vs UDP (Phần 2)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the transport layer characteristics from the left onto the corresponding transport protocol on the right.",
    "prompt_vi": "Kéo thả các đặc điểm kỹ thuật của tầng vận chuyển từ bên trái vào giao thức TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q11_a.png",
    "answer_image": "images/dnd/dnd_q11_b.png",
    "source_items": [
      {
        "id": "q11-t1",
        "text_en": "client confirms data delivery from the server",
        "text_vi": "Phía nhận gửi gói tin xác nhận đã nhận dữ liệu (ACK)"
      },
      {
        "id": "q11-t2",
        "text_en": "checks for errors and guarantees reception",
        "text_vi": "Kiểm tra lỗi và đảm bảo dữ liệu đến đích nguyên vẹn"
      },
      {
        "id": "q11-t3",
        "text_en": "delays data transmission if congestion is detected",
        "text_vi": "Chủ động giảm tốc độ truyền nếu phát hiện tắc nghẽn mạng"
      },
      {
        "id": "q11-u1",
        "text_en": "able to send data without requiring an established connection beforehand",
        "text_vi": "Gửi dữ liệu trực tiếp mà không cần thiết lập kết nối trước"
      },
      {
        "id": "q11-u2",
        "text_en": "supports broadcast and multicast traffic",
        "text_vi": "Hỗ trợ truyền gói tin Broadcast và Multicast"
      },
      {
        "id": "q11-u3",
        "text_en": "packets sent independently and received in no fixed order",
        "text_vi": "Các gói tin gửi độc lập và có thể đến nơi không theo thứ tự"
      }
    ],
    "drop_zones": [
      {
        "id": "q11-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q11-t1",
          "q11-t2",
          "q11-t3"
        ]
      },
      {
        "id": "q11-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q11-u1",
          "q11-u2",
          "q11-u3"
        ]
      }
    ],
    "explanation": "- **TCP**: Độ tin cậy cao, có kiểm soát nghẽn (Congestion Avoidance), đánh số thứ tự sequence number và bắt buộc xác nhận ACK.\n- **UDP**: Truyền theo kiểu 'best-effort', không bắt tay, các datagram độc lập, cho phép gửi Broadcast/Multicast (TCP chỉ hỗ trợ Unicast 1-1)."
  },
  {
    "id": 12,
    "title": "Câu 12: Cấu Hình Địa Chỉ IP Khả Dụng (DC-1 & HQ-1)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. The IP address configurations must be completed on the DC-1 and HQ-1 routers based on these requirements. Drag and drop the commands from the left onto the destination interfaces on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Cấu hình địa chỉ IP trên router DC-1 và HQ-1 theo các yêu cầu chi tiết (địa chỉ IP khả dụng đầu tiên hoặc cuối cùng trong subnet). Kéo thả câu lệnh IP từ bên trái vào đúng cổng ở bên phải.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q12_a.png",
    "question_image": "images/dnd/dnd_q12_b.png",
    "answer_image": "images/dnd/dnd_q12_c.png",
    "source_items": [
      {
        "id": "q12-c1",
        "text_en": "ip address 192.168.4.9 255.255.255.248",
        "text_vi": "ip address 192.168.4.9 255.255.255.248 (/29 đầu tiên khả dụng)"
      },
      {
        "id": "q12-c2",
        "text_en": "ip address 192.168.3.14 255.255.255.240",
        "text_vi": "ip address 192.168.3.14 255.255.255.240 (/28 cuối cùng khả dụng)"
      },
      {
        "id": "q12-c3",
        "text_en": "ip address 209.165.202.130 255.255.255.252",
        "text_vi": "ip address 209.165.202.130 255.255.255.252 (/30 cuối cùng khả dụng)"
      },
      {
        "id": "q12-c4",
        "text_en": "ip address 192.168.4.14 255.255.255.248",
        "text_vi": "ip address 192.168.4.14 255.255.255.248 (/29 cuối cùng khả dụng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q12-dc-gi10",
        "label_en": "DC-1 Gi1/0 (last usable on /30)",
        "label_vi": "DC-1 Gi1/0: IP khả dụng cuối cùng của mạng /30",
        "target_ids": [
          "q12-c3"
        ]
      },
      {
        "id": "q12-dc-gi11",
        "label_en": "DC-1 Gi1/1 (first usable on /29)",
        "label_vi": "DC-1 Gi1/1: IP khả dụng đầu tiên của mạng 192.168.4.8/29",
        "target_ids": [
          "q12-c1"
        ]
      },
      {
        "id": "q12-dc-gi12",
        "label_en": "DC-1 Gi1/2 (last usable on /28)",
        "label_vi": "DC-1 Gi1/2: IP khả dụng cuối cùng của mạng 192.168.3.0/28",
        "target_ids": [
          "q12-c2"
        ]
      },
      {
        "id": "q12-hq-gi13",
        "label_en": "HQ-1 Gi1/3 (last usable on /29)",
        "label_vi": "HQ-1 Gi1/3: IP khả dụng cuối cùng của mạng 192.168.4.8/29",
        "target_ids": [
          "q12-c4"
        ]
      }
    ],
    "explanation": "Quy tắc tính IP khả dụng (Usable IP):\n- Subnet /30: bước nhảy 4. Mạng `209.165.202.128/30`, IP khả dụng gồm .129 và .130. IP cuối cùng là `.130 255.255.255.252`.\n- Subnet /29: bước nhảy 8. Mạng `192.168.4.8/29`, dải IP là .9 đến .14. IP đầu tiên là `.9`, IP cuối cùng là `.14`.\n- Subnet /28: bước nhảy 16. Mạng `192.168.3.0/28`, dải IP là .1 đến .14. IP cuối cùng là `.14 255.255.255.240`."
  },
  {
    "id": 13,
    "title": "Câu 13: Các Cơ Chế Đảm Bảo Chất Lượng Dịch Vụ (QoS)",
    "category": "IP Services",
    "prompt_en": "Drag and drop the QoS features from the left onto the corresponding statements on the right.",
    "prompt_vi": "Kéo thả tên các tính năng QoS từ bên trái vào đúng định nghĩa cơ chế ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q13_a.png",
    "answer_image": "images/dnd/dnd_q13_b.png",
    "source_items": [
      {
        "id": "q13-policing",
        "text_en": "policing",
        "text_vi": "policing (Điều hòa lưu lượng)"
      },
      {
        "id": "q13-marking",
        "text_en": "marking",
        "text_vi": "marking (Đánh dấu gói tin)"
      },
      {
        "id": "q13-queuing",
        "text_en": "queuing",
        "text_vi": "queuing (Hàng đợi lưu đệm)"
      },
      {
        "id": "q13-class",
        "text_en": "classification",
        "text_vi": "classification (Phân loại lưu lượng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q13-z1",
        "label_en": "Applies a specific action (e.g. drop) whenever the maximum rate is exceeded",
        "label_vi": "Áp dụng biện pháp xử lý (hủy gói tin hoặc hạ mức ưu tiên) khi lưu lượng vượt quá ngưỡng quy định",
        "target_ids": [
          "q13-policing"
        ]
      },
      {
        "id": "q13-z2",
        "label_en": "Sets a value in the header to associate a packet with a QoS group",
        "label_vi": "Ghi một giá trị ưu tiên vào header (như CoS hoặc DSCP) để gắn gói tin vào một nhóm QoS",
        "target_ids": [
          "q13-marking"
        ]
      },
      {
        "id": "q13-z3",
        "label_en": "Reduces congestion by holding packets in buffers and distributing them when bandwidth allows",
        "label_vi": "Giảm nghẽn mạng bằng cách lưu gói tin vào bộ đệm và chuyển tiếp dần ra ngoài khi băng thông cho phép",
        "target_ids": [
          "q13-queuing"
        ]
      },
      {
        "id": "q13-z4",
        "label_en": "The overall process of using specific criteria to differentiate traffic into categories",
        "label_vi": "Quy trình tổng thể dùng các tiêu chí (IP, Port, Protocol) để chia lưu lượng mạng thành các nhóm riêng biệt",
        "target_ids": [
          "q13-class"
        ]
      }
    ],
    "explanation": "4 bước cơ bản của tiến trình xử lý QoS trong Cisco IOS:\n1. **Classification**: Nhận diện và phân loại gói tin (VoIP, Web, Video).\n2. **Marking**: Đánh dấu nhãn độ ưu tiên vào header (CoS Layer 2, DSCP Layer 3).\n3. **Queuing**: Xếp gói vào hàng đợi ưu tiên (Priority Queue cho thoại).\n4. **Policing & Shaping**: Policing sẽ drop ngay gói tin nếu vượt ngưỡng băng thông; Shaping sẽ đệm lại (buffer) để truyền từ từ."
  },
  {
    "id": 14,
    "title": "Câu 14: Các Chế Độ Cổng VLAN Trên Switch Cisco",
    "category": "Network Access",
    "prompt_en": "Drag and drop the VLAN port types from the left onto the corresponding functions on the right.",
    "prompt_vi": "Kéo thả các kiểu cổng VLAN từ bên trái vào đúng chức năng của cổng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q14_a.png",
    "answer_image": "images/dnd/dnd_q14_b.png",
    "source_items": [
      {
        "id": "q14-static",
        "text_en": "Static access",
        "text_vi": "Static access (Cổng Access tĩnh)"
      },
      {
        "id": "q14-dyn",
        "text_en": "Dynamic access",
        "text_vi": "Dynamic access (Cổng Access động)"
      },
      {
        "id": "q14-trunk",
        "text_en": "trunk",
        "text_vi": "Trunk (Cổng trung kế Trunk)"
      },
      {
        "id": "q14-tunnel",
        "text_en": "tunnel",
        "text_vi": "Tunnel (Cổng đường hầm QinQ)"
      },
      {
        "id": "q14-pvlan",
        "text_en": "private VLAN",
        "text_vi": "Private VLAN (VLAN riêng tư PVLAN)"
      }
    ],
    "drop_zones": [
      {
        "id": "q14-z1",
        "label_en": "Allows the port to belong to one VLAN when manually configured",
        "label_vi": "Cho phép cổng thuộc về đúng một VLAN duy nhất khi được cấu hình thủ công",
        "target_ids": [
          "q14-static"
        ]
      },
      {
        "id": "q14-z2",
        "label_en": "Allows the port to belong to one VLAN determined dynamically",
        "label_vi": "Cho phép cổng tự động gán vào một VLAN thông qua máy chủ quản lý (như VMPS)",
        "target_ids": [
          "q14-dyn"
        ]
      },
      {
        "id": "q14-z3",
        "label_en": "Allows the port to carry traffic for one or more VLANs",
        "label_vi": "Cho phép cổng mang lưu lượng của nhiều VLAN cùng lúc (gắn thẻ 802.1Q)",
        "target_ids": [
          "q14-trunk"
        ]
      },
      {
        "id": "q14-z4",
        "label_en": "Allows the switch to support a single service provider QinQ tunnel",
        "label_vi": "Cho phép switch nhà mạng đóng gói thẻ VLAN kép QinQ (802.1Q tunneling)",
        "target_ids": [
          "q14-tunnel"
        ]
      },
      {
        "id": "q14-z5",
        "label_en": "Allows the port to communicate with others within the same community VLAN",
        "label_vi": "Cho phép cổng giao tiếp với các cổng khác trong cùng Community VLAN",
        "target_ids": [
          "q14-pvlan"
        ]
      }
    ],
    "explanation": "- **Static Access**: Cổng nối PC/Server, quản trị viên gán cố định `switchport access vlan X`.\n- **Dynamic Access**: Cổng tự động nhận VLAN dựa trên địa chỉ MAC nhờ VMPS.\n- **Trunk**: Nối Switch-Switch hoặc Switch-Router, gắn tag 802.1Q truyền nhiều VLAN.\n- **Tunnel (802.1Q tunneling / QinQ)**: Thêm tag nhà mạng bên ngoài tag khách hàng.\n- **Private VLAN**: Chia nhỏ VLAN thành Primary, Isolated và Community ports."
  },
  {
    "id": 15,
    "title": "Câu 15: Phân Biệt Địa Chỉ IP Multicast vs Unicast",
    "category": "IP Connectivity",
    "prompt_en": "Drag and drop the characteristic from the left onto the IP address type on the right.",
    "prompt_vi": "Kéo thả các đặc tính của địa chỉ IP từ bên trái vào đúng loại địa chỉ Unicast hoặc Multicast ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q15_a.png",
    "answer_image": "images/dnd/dnd_q15_b.png",
    "source_items": [
      {
        "id": "q15-u1",
        "text_en": "publicly routable in the same way as standard host traffic",
        "text_vi": "Định tuyến công khai theo cách thức thông thường của một host độc lập"
      },
      {
        "id": "q15-u2",
        "text_en": "routable and reachable over the Internet",
        "text_vi": "Có thể định tuyến và liên lạc được trực tiếp trên mạng Internet toàn cầu"
      },
      {
        "id": "q15-m1",
        "text_en": "provides one-to-many communications",
        "text_vi": "Cung cấp hình thức truyền phát một-đến-nhiều (one-to-many)"
      },
      {
        "id": "q15-m2",
        "text_en": "has a unicast source sent to a group address",
        "text_vi": "Gói tin có địa chỉ nguồn là Unicast nhưng địa chỉ đích là địa chỉ nhóm"
      }
    ],
    "drop_zones": [
      {
        "id": "q15-unicast",
        "label_en": "Unicast IP Address",
        "label_vi": "Địa Chỉ IP Unicast (Giao tiếp đơn bào 1-1)",
        "target_ids": [
          "q15-u1",
          "q15-u2"
        ]
      },
      {
        "id": "q15-multicast",
        "label_en": "Multicast IP Address",
        "label_vi": "Địa Chỉ IP Multicast (Giao tiếp nhóm 1-nhiều)",
        "target_ids": [
          "q15-m1",
          "q15-m2"
        ]
      }
    ],
    "explanation": "- **Unicast**: Giao tiếp 1-1. Nguồn là 1 host, đích là 1 host. Địa chỉ IP công cộng (Public IP) Unicast định tuyến toàn cầu trên Internet.\n- **Multicast**: Giao tiếp 1-nhiều. Địa chỉ nguồn luôn là Unicast của máy gửi, nhưng địa chỉ đích là địa chỉ Multicast nhóm (IPv4: 224.0.0.0/4, IPv6: FF00::/8)."
  },
  {
    "id": 16,
    "title": "Câu 16: Cấu Trúc Các Loại Cáp Mạng",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the cable descriptions from the left onto the corresponding cable types on the right.",
    "prompt_vi": "Kéo thả các mô tả cấu tạo vật lý từ bên trái vào đúng tên loại cáp ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q16_a.png",
    "answer_image": "images/dnd/dnd_q16_b.png",
    "source_items": [
      {
        "id": "q16-tp",
        "text_en": "is comprised of shielded and unshielded twisted pairs",
        "text_vi": "Gồm các cặp dây đồng xoắn đôi có bọc kim (STP) hoặc không bọc kim (UTP)"
      },
      {
        "id": "q16-coax",
        "text_en": "contains a conductor, dielectric, and sheathing",
        "text_vi": "Chứa một lõi dẫn đồng ở giữa, lớp cách điện điện môi, lưới chống nhiễu và vỏ bọc"
      },
      {
        "id": "q16-fiber",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "Được cấu tạo từ các sợi thủy tinh/silica tinh khiết truyền tín hiệu quang"
      }
    ],
    "drop_zones": [
      {
        "id": "q16-z1",
        "label_en": "Twisted-Pair Cable",
        "label_vi": "Cáp Xoắn Đôi (Twisted Pair)",
        "target_ids": [
          "q16-tp"
        ]
      },
      {
        "id": "q16-z2",
        "label_en": "Coaxial Cable",
        "label_vi": "Cáp Đồng Trục (Coaxial)",
        "target_ids": [
          "q16-coax"
        ]
      },
      {
        "id": "q16-z3",
        "label_en": "Fiber Optic Cable",
        "label_vi": "Cáp Sợi Quang (Fiber Optic)",
        "target_ids": [
          "q16-fiber"
        ]
      }
    ],
    "explanation": "- **Twisted-Pair (Cáp xoắn đôi Cat5e/Cat6)**: Các cặp dây đồng xoắn lại để triệt tiêu nhiễu xuyên âm (crosstalk).\n- **Coaxial (Cáp đồng trục)**: Lõi đồng trung tâm được bao bọc bởi lớp điện môi và lưới kim loại dẫn nối đất.\n- **Fiber Optic (Cáp quang)**: Cấu tạo gồm lõi thủy tinh (Core), lớp phản xạ ánh sáng (Cladding) và lớp vỏ bảo vệ (Buffer/Jacket)."
  },
  {
    "id": 17,
    "title": "Câu 17: Đặc Tính Ứng Dụng: TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the TCP and UDP characteristics from the left onto the corresponding protocol categories on the right.",
    "prompt_vi": "Kéo thả các đặc tính ứng dụng từ bên trái vào giao thức TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q17_a.png",
    "answer_image": "images/dnd/dnd_q17_b.png",
    "source_items": [
      {
        "id": "q17-t1",
        "text_en": "sends data in a specific order",
        "text_vi": "Gửi dữ liệu có đánh số thứ tự tuần tự (Sequence Numbers)"
      },
      {
        "id": "q17-t2",
        "text_en": "requires an established connection",
        "text_vi": "Bắt buộc phải thiết lập kết nối trước khi gửi (bắt tay 3 bước)"
      },
      {
        "id": "q17-t3",
        "text_en": "supports web browsing",
        "text_vi": "Được sử dụng cho duyệt web (HTTP/HTTPS)"
      },
      {
        "id": "q17-u1",
        "text_en": "suited for streaming audio and video",
        "text_vi": "Phù hợp tối ưu cho truyền phát âm thanh và video trực tiếp"
      },
      {
        "id": "q17-u2",
        "text_en": "retransmission is unsupported",
        "text_vi": "Không hỗ trợ cơ chế truyền lại khi gói tin bị mất"
      },
      {
        "id": "q17-u3",
        "text_en": "tolerates packet loss",
        "text_vi": "Chấp nhận mất một lượng nhỏ gói tin mà không ảnh hưởng lớn đến dịch vụ"
      }
    ],
    "drop_zones": [
      {
        "id": "q17-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q17-t1",
          "q17-t2",
          "q17-t3"
        ]
      },
      {
        "id": "q17-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q17-u1",
          "q17-u2",
          "q17-u3"
        ]
      }
    ],
    "explanation": "- **TCP**: Ứng dụng cần toàn vẹn dữ liệu 100% như Web (HTTP/HTTPS - 80/443), Email (SMTP/IMAP), truyền file (FTP). Mất gói là bắt buộc truyền lại.\n- **UDP**: Ứng dụng thời gian thực như VoIP (SIP/RTP), Livestream, DNS, DHCP. Chấp nhận mất một vài frame thoại/hình ảnh hơn là đợi truyền lại gây giật lag."
  },
  {
    "id": 18,
    "title": "Câu 18: Các Tính Năng Bảo Mật Layer 2 Cisco (DHCP / DAI / IPSG / Storm Control)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the Cisco security features from the left onto the attack types they mitigate on the right.",
    "prompt_vi": "Kéo thả tên các tính năng bảo mật Layer 2 của Cisco từ bên trái vào đúng loại tấn công mà chúng ngăn chặn ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q18_a.png",
    "answer_image": "images/dnd/dnd_q18_b.png",
    "source_items": [
      {
        "id": "q18-dhcp",
        "text_en": "DHCP snooping",
        "text_vi": "DHCP Snooping"
      },
      {
        "id": "q18-dai",
        "text_en": "Dynamic ARP Inspection (DAI)",
        "text_vi": "Dynamic ARP Inspection (DAI)"
      },
      {
        "id": "q18-storm",
        "text_en": "Storm control",
        "text_vi": "Storm Control"
      },
      {
        "id": "q18-ipsg",
        "text_en": "IP Source Guard (IPSG)",
        "text_vi": "IP Source Guard (IPSG)"
      }
    ],
    "drop_zones": [
      {
        "id": "q18-z1",
        "label_en": "Rogue DHCP server that spoofs IP configuration",
        "label_vi": "Ngăn chặn máy chủ DHCP giả mạo (Rogue DHCP Server) phát IP/DNS sai",
        "target_ids": [
          "q18-dhcp"
        ]
      },
      {
        "id": "q18-z2",
        "label_en": "ARP cache poisoning attacks",
        "label_vi": "Ngăn chặn tấn công đầu độc bộ nhớ đệm ARP (ARP Spoofing / Poisoning)",
        "target_ids": [
          "q18-dai"
        ]
      },
      {
        "id": "q18-z3",
        "label_en": "Broadcast / Multicast flood attacks",
        "label_vi": "Ngăn chặn bão lưu lượng Broadcast hoặc Multicast làm quá tải cổng switch",
        "target_ids": [
          "q18-storm"
        ]
      },
      {
        "id": "q18-z4",
        "label_en": "Rogue clients spoofing IP addresses on the network",
        "label_vi": "Ngăn chặn thiết bị giả mạo địa chỉ IP (IP Spoofing) để truy cập mạng",
        "target_ids": [
          "q18-ipsg"
        ]
      }
    ],
    "explanation": "Bộ tứ giải pháp bảo mật Layer 2 kinh điển của Cisco:\n1. **DHCP Snooping**: Phân loại cổng Trusted/Untrusted, chặn DHCP Server lậu.\n2. **Dynamic ARP Inspection (DAI)**: Kiểm tra tính hợp lệ của gói ARP dựa trên bảng DHCP Snooping Binding để chống ARP Poisoning.\n3. **IP Source Guard (IPSG)**: Chặn gói tin có IP nguồn giả mạo bằng cách kiểm tra bảng DHCP Snooping Binding.\n4. **Storm Control**: Giới hạn lưu lượng Broadcast/Multicast/Unicast vượt ngưỡng."
  },
  {
    "id": 19,
    "title": "Câu 19: So Sánh Toàn Diện Giao Thức TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the protocol characteristics from the left onto the corresponding protocol on the right.",
    "prompt_vi": "Kéo thả các đặc tính kỹ thuật từ bên trái vào giao thức TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q19_a.png",
    "answer_image": "images/dnd/dnd_q19_b.png",
    "source_items": [
      {
        "id": "q19-t1",
        "text_en": "uses a three-way handshake",
        "text_vi": "Sử dụng cơ chế bắt tay ba bước (SYN, SYN-ACK, ACK)"
      },
      {
        "id": "q19-t2",
        "text_en": "preferred for web browsing",
        "text_vi": "Là lựa chọn ưu tiên cho các dịch vụ duyệt web và truyền file"
      },
      {
        "id": "q19-t3",
        "text_en": "provides a reliable connection",
        "text_vi": "Cung cấp kết nối tin cậy và đảm bảo toàn vẹn dữ liệu"
      },
      {
        "id": "q19-u1",
        "text_en": "faster data transmission",
        "text_vi": "Tốc độ truyền dữ liệu nhanh hơn do không có chi phí đàm phán"
      },
      {
        "id": "q19-u2",
        "text_en": "used for streaming audio and VoIP",
        "text_vi": "Được dùng chuyên biệt cho gọi thoại VoIP và phát video trực tuyến"
      },
      {
        "id": "q19-u3",
        "text_en": "connectionless protocol",
        "text_vi": "Là giao thức phi kết nối (Connectionless)"
      }
    ],
    "drop_zones": [
      {
        "id": "q19-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q19-t1",
          "q19-t2",
          "q19-t3"
        ]
      },
      {
        "id": "q19-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q19-u1",
          "q19-u2",
          "q19-u3"
        ]
      }
    ],
    "explanation": "So sánh cốt lõi:\n- **TCP**: Tin cậy (Reliable), hướng kết nối (Connection-oriented, 3-way handshake), kiểm tra lỗi và truyền lại, phù hợp cho Web, Email.\n- **UDP**: Nhanh (Fast), phi kết nối (Connectionless), không đảm bảo (Best-effort), độ trễ cực thấp, phù hợp cho VoIP, DNS, Streaming."
  },
  {
    "id": 20,
    "title": "Câu 20: Cáp Đồng vs Cáp Quang Đa Mốt (Multimode Fiber)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristics from the left onto the corresponding cable type on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào đúng loại cáp đồng hoặc cáp quang đa mốt ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q20_a.png",
    "answer_image": "images/dnd/dnd_q20_b.png",
    "source_items": [
      {
        "id": "q20-cu1",
        "text_en": "is easy to tap into and obtain secure information",
        "text_vi": "Dễ dàng bị trích xuất / nghe lén tín hiệu vật lý để đánh cắp thông tin"
      },
      {
        "id": "q20-cu2",
        "text_en": "is comprised of shielded and unshielded twisted pairs",
        "text_vi": "Cấu tạo từ các cặp dây đồng xoắn đôi (STP hoặc UTP)"
      },
      {
        "id": "q20-mm1",
        "text_en": "attenuation increases over long distances",
        "text_vi": "Độ suy hao và tán sắc tăng mạnh khi truyền qua cự ly khoảng cách xa"
      },
      {
        "id": "q20-mm2",
        "text_en": "is prone to damage when mishandled",
        "text_vi": "Dễ bị gãy vỡ sợi quang bên trong nếu bị uốn cong quá bán kính cho phép"
      }
    ],
    "drop_zones": [
      {
        "id": "q20-copper",
        "label_en": "Copper Cabling",
        "label_vi": "Cáp Đồng (Copper)",
        "target_ids": [
          "q20-cu1",
          "q20-cu2"
        ]
      },
      {
        "id": "q20-mmf",
        "label_en": "Multimode Fiber (MMF)",
        "label_vi": "Cáp Quang Đa Mốt (Multimode Fiber)",
        "target_ids": [
          "q20-mm1",
          "q20-mm2"
        ]
      }
    ],
    "explanation": "- **Cáp đồng (Copper)**: Dùng dây đồng xoắn đôi, dễ can thiệp phần cứng nghe trộm.\n- **Cáp quang đa mốt (MMF)**: Lõi lớn (50 µm hoặc 62.5 µm), tia sáng phản xạ nhiều góc tạo tán sắc (modal dispersion) làm suy hao nhanh ở cự ly xa (chỉ dùng trong Data Center hoặc tòa nhà dưới 500m), sợi thủy tinh dễ gãy nếu uốn cong quá mức."
  },
  {
    "id": 21,
    "title": "Câu 21: Các Thành Phần Kiến Trúc Của Ansible",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the Ansible architecture terms from the left onto the correct definitions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ kiến trúc Ansible từ bên trái vào đúng định nghĩa ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q21_a.png",
    "answer_image": "images/dnd/dnd_q21_b.png",
    "source_items": [
      {
        "id": "q21-playbook",
        "text_en": "playbook",
        "text_vi": "Playbook"
      },
      {
        "id": "q21-control",
        "text_en": "control node",
        "text_vi": "Control Node"
      },
      {
        "id": "q21-managed",
        "text_en": "managed node",
        "text_vi": "Managed Node"
      },
      {
        "id": "q21-module",
        "text_en": "module",
        "text_vi": "Module"
      },
      {
        "id": "q21-inventory",
        "text_en": "inventory",
        "text_vi": "Inventory"
      }
    ],
    "drop_zones": [
      {
        "id": "q21-z1",
        "label_en": "Collection of actions to perform on target devices expressed in YAML format",
        "label_vi": "Tập hợp các tác vụ cần thực thi trên thiết bị đích được viết dưới định dạng YAML",
        "target_ids": [
          "q21-playbook"
        ]
      },
      {
        "id": "q21-z2",
        "label_en": "Device with Ansible installed that manages target devices",
        "label_vi": "Máy tính/máy chủ cài đặt Ansible đóng vai trò trung tâm điều khiển và quản lý",
        "target_ids": [
          "q21-control"
        ]
      },
      {
        "id": "q21-z3",
        "label_en": "Network device or server without Ansible installed upon which commands are executed",
        "label_vi": "Thiết bị mạng hoặc máy chủ đích được quản trị (không cần cài Ansible)",
        "target_ids": [
          "q21-managed"
        ]
      },
      {
        "id": "q21-z4",
        "label_en": "Unit of Python code to be executed on target devices",
        "label_vi": "Đơn vị mã nguồn Python thực thi từng tác vụ cụ thể trên thiết bị",
        "target_ids": [
          "q21-module"
        ]
      },
      {
        "id": "q21-z5",
        "label_en": "Ansible file that defines target devices and groups upon which commands can be executed",
        "label_vi": "Tệp danh mục khai báo danh sách IP, tên máy và nhóm thiết bị cần quản trị",
        "target_ids": [
          "q21-inventory"
        ]
      }
    ],
    "explanation": "5 thuật ngữ nền tảng của Ansible:\n1. **Control Node**: Nơi chạy lệnh Ansible (Linux/macOS, có Python).\n2. **Managed Node**: Thiết bị mạng được cấu hình (Switch/Router Cisco).\n3. **Inventory**: File chứa danh sách host (hosts.ini hoặc hosts.yml).\n4. **Playbook**: Kịch bản tự động hóa dạng YAML.\n5. **Module**: Đoạn code Python thực thi hành động cụ thể (như `cisco.ios.ios_config`)."
  },
  {
    "id": 22,
    "title": "Câu 22: Thành Phần Dòng Định Tuyến EIGRP",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the routing table components from the left onto the corresponding categories on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các giá trị thành phần bảng định tuyến từ bên trái vào đúng danh mục ở bên phải theo dòng định tuyến EIGRP.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q22_a.png",
    "question_image": "images/dnd/dnd_q22_b.png",
    "answer_image": "images/dnd/dnd_q22_c.png",
    "source_items": [
      {
        "id": "q22-p28",
        "text_en": "/28",
        "text_vi": "/28"
      },
      {
        "id": "q22-ad90",
        "text_en": "90",
        "text_vi": "90"
      },
      {
        "id": "q22-m30",
        "text_en": "30",
        "text_vi": "30"
      },
      {
        "id": "q22-p30",
        "text_en": "/30",
        "text_vi": "/30"
      },
      {
        "id": "q22-ad110",
        "text_en": "110",
        "text_vi": "110"
      },
      {
        "id": "q22-m127",
        "text_en": "127",
        "text_vi": "127"
      }
    ],
    "drop_zones": [
      {
        "id": "q22-z1",
        "label_en": "Subnet Prefix",
        "label_vi": "Tiền tố mạng con (Subnet Prefix)",
        "target_ids": [
          "q22-p28"
        ]
      },
      {
        "id": "q22-z2",
        "label_en": "Administrative Distance",
        "label_vi": "Khoảng cách quản trị (AD)",
        "target_ids": [
          "q22-ad90"
        ]
      },
      {
        "id": "q22-z3",
        "label_en": "Metric / Cost",
        "label_vi": "Độ đo chi phí (Metric / Cost)",
        "target_ids": [
          "q22-m30"
        ]
      }
    ],
    "explanation": "Trong sơ đồ bảng định tuyến, dòng route EIGRP hiển thị:\n`D 10.10.11.0/28 [90/30] via 10.10.10.2`\n- **Subnet Prefix**: `/28`\n- **Administrative Distance (AD)**: `90` (mặc định của giao thức EIGRP nội bộ)\n- **Metric / Cost**: `30` (độ đo chi phí của tuyến đường)."
  },
  {
    "id": 23,
    "title": "Câu 23: Phân Biệt Địa Chỉ IPv6: Unique Local vs Multicast",
    "category": "IP Connectivity",
    "prompt_en": "Drag and drop the characteristics from the left onto the IPv6 address types on the right.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào loại địa chỉ IPv6 tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q23_a.png",
    "answer_image": "images/dnd/dnd_q23_b.png",
    "source_items": [
      {
        "id": "q23-ula1",
        "text_en": "may be used by multiple organizations at the same time",
        "text_vi": "Có thể được nhiều tổ chức/doanh nghiệp sử dụng trùng nhau đồng thời"
      },
      {
        "id": "q23-ula2",
        "text_en": "allows sites to be combined without address conflicts",
        "text_vi": "Cho phép sáp nhập các chi nhánh mạng nội bộ mà không lo xung đột IP"
      },
      {
        "id": "q23-multi1",
        "text_en": "sends packets to a group address rather than a single address",
        "text_vi": "Gửi gói tin đến một địa chỉ nhóm thay vì một máy nhận cụ thể"
      },
      {
        "id": "q23-multi2",
        "text_en": "never used as a source address",
        "text_vi": "Tuyệt đối không bao giờ được dùng làm địa chỉ IP nguồn của gói tin"
      }
    ],
    "drop_zones": [
      {
        "id": "q23-ula",
        "label_en": "Unique Local Address (FC00::/7)",
        "label_vi": "Địa Chỉ IPv6 Unique Local (FC00::/7)",
        "target_ids": [
          "q23-ula1",
          "q23-ula2"
        ]
      },
      {
        "id": "q23-multicast",
        "label_en": "Multicast Address (FF00::/8)",
        "label_vi": "Địa Chỉ IPv6 Multicast (FF00::/8)",
        "target_ids": [
          "q23-multi1",
          "q23-multi2"
        ]
      }
    ],
    "explanation": "- **Unique Local (FC00::/7 - ULA)**: Tương đương IP Private của IPv4 (RFC 1918), chỉ định tuyến trong mạng nội bộ công ty, không ra Internet.\n- **Multicast (FF00::/8)**: Gửi cho nhóm nhiều thiết bị. Địa chỉ IP nguồn bắt buộc phải là Unicast, không một thiết bị nào được phép đặt IP nguồn là Multicast."
  },
  {
    "id": 24,
    "title": "Câu 24: Cáp Xoắn Đôi vs Cáp Quang Đơn Mốt (SMF)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the cable characteristics from the left onto the cable types on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào đúng loại cáp xoắn đôi hoặc cáp quang đơn mốt ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q24_a.png",
    "answer_image": "images/dnd/dnd_q24_b.png",
    "source_items": [
      {
        "id": "q24-tp1",
        "text_en": "comprised of shielded and unshielded twisted pairs",
        "text_vi": "Cấu tạo từ các cặp dây đồng xoắn đôi có bọc kim hoặc không bọc kim"
      },
      {
        "id": "q24-tp2",
        "text_en": "is affected by electrical and magnetic interference",
        "text_vi": "Bị ảnh hưởng suy giảm chất lượng bởi nhiễu điện và từ trường (EMI/RFI)"
      },
      {
        "id": "q24-sm1",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "Được chế tạo từ các sợi thủy tinh silica cách điện tinh khiết"
      },
      {
        "id": "q24-sm2",
        "text_en": "uses a single wavelength of light",
        "text_vi": "Sử dụng một bước sóng ánh sáng laser duy nhất để truyền dữ liệu"
      }
    ],
    "drop_zones": [
      {
        "id": "q24-twisted",
        "label_en": "Twisted-Pair Cabling",
        "label_vi": "Cáp Xoắn Đôi (Twisted-Pair)",
        "target_ids": [
          "q24-tp1",
          "q24-tp2"
        ]
      },
      {
        "id": "q24-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q24-sm1",
          "q24-sm2"
        ]
      }
    ],
    "explanation": "- **Cáp xoắn đôi**: Dây đồng dẫn điện nên nhạy cảm với nhiễu từ động cơ, đèn huỳnh quang (EMI).\n- **Cáp quang đơn mốt (SMF)**: Lõi rất nhỏ 9 µm, truyền 1 tia sáng duy nhất với 1 bước sóng xác định (1310nm hoặc 1550nm), không có tán sắc mode, không bị nhiễu điện từ."
  },
  {
    "id": 25,
    "title": "Câu 25: Toàn Vẹn Dữ Liệu vs Tốc Độ: TCP & UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the TCP and UDP characteristics from the left onto the supporting protocols on the right.",
    "prompt_vi": "Kéo thả các đặc tính của tầng Transport từ bên trái vào giao thức TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q25_a.png",
    "answer_image": "images/dnd/dnd_q25_b.png",
    "source_items": [
      {
        "id": "q25-t1",
        "text_en": "uses sequence numbers",
        "text_vi": "Sử dụng số thứ tự Sequence Number để ráp dữ liệu"
      },
      {
        "id": "q25-t2",
        "text_en": "relies on acknowledgment packets",
        "text_vi": "Phụ thuộc vào các gói tin báo nhận (ACK) để xác nhận truyền thành công"
      },
      {
        "id": "q25-t3",
        "text_en": "ensures data integrity",
        "text_vi": "Đảm bảo tính toàn vẹn dữ liệu hoàn toàn không bị mất mát"
      },
      {
        "id": "q25-u1",
        "text_en": "supports real-time applications",
        "text_vi": "Tối ưu hóa hỗ trợ các ứng dụng truyền thông thời gian thực"
      },
      {
        "id": "q25-u2",
        "text_en": "connectionless at transport layer",
        "text_vi": "Hoạt động theo mô hình phi kết nối ở tầng Transport"
      },
      {
        "id": "q25-u3",
        "text_en": "minimal error checking",
        "text_vi": "Chỉ kiểm tra lỗi tối thiểu (chỉ có trường Checksum)"
      }
    ],
    "drop_zones": [
      {
        "id": "q25-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q25-t1",
          "q25-t2",
          "q25-t3"
        ]
      },
      {
        "id": "q25-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q25-u1",
          "q25-u2",
          "q25-u3"
        ]
      }
    ],
    "explanation": "- **TCP**: Toàn vẹn tuyệt đối nhờ Sequence number (sắp xếp đúng thứ tự khi đến nơi), Acknowledgment number (báo nhận), Retransmission (truyền lại gói mất).\n- **UDP**: Header siêu gọn (8 byte), không kiểm soát luồng, Checksum chỉ kiểm tra hỏng hóc cơ bản, nếu lỗi thì hủy luôn không truyền lại."
  },
  {
    "id": 26,
    "title": "Câu 26: Chức Năng Các Thiết Bị Mạng (Firewall / Switch / AP / WLC)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto the device type on the right.",
    "prompt_vi": "Kéo thả các chức năng từ bên trái vào đúng loại thiết bị mạng tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q26_a.png",
    "answer_image": "images/dnd/dnd_q26_b.png",
    "source_items": [
      {
        "id": "q26-fw",
        "text_en": "provides security policies and content filtering",
        "text_vi": "Cung cấp chính sách bảo mật, tường lửa trạng thái và lọc nội dung"
      },
      {
        "id": "q26-sw",
        "text_en": "formats an Ethernet frame and forwards to a destination",
        "text_vi": "Đóng gói khung Ethernet và chuyển tiếp dựa trên địa chỉ MAC"
      },
      {
        "id": "q26-ap",
        "text_en": "supports both IEEE 802.11 and Ethernet standards",
        "text_vi": "Hỗ trợ kết nối chuyển đổi giữa chuẩn Wi-Fi (802.11) và Ethernet (802.3)"
      },
      {
        "id": "q26-wlc1",
        "text_en": "makes forwarding decisions when in LWAPP mode",
        "text_vi": "Đưa ra quyết định chuyển tiếp gói tin khi AP chạy ở chế độ LWAPP/CAPWAP"
      },
      {
        "id": "q26-wlc2",
        "text_en": "can be deployed on-premise and/or in the cloud",
        "text_vi": "Có thể triển khai linh hoạt tại chỗ (On-premise) hoặc trên đám mây (Cloud)"
      }
    ],
    "drop_zones": [
      {
        "id": "q26-z-fw",
        "label_en": "Firewall",
        "label_vi": "Tường lửa (Firewall)",
        "target_ids": [
          "q26-fw"
        ]
      },
      {
        "id": "q26-z-sw",
        "label_en": "Switch",
        "label_vi": "Bộ chuyển mạch (Switch)",
        "target_ids": [
          "q26-sw"
        ]
      },
      {
        "id": "q26-z-ap",
        "label_en": "Access Point (AP)",
        "label_vi": "Điểm truy cập không dây (AP)",
        "target_ids": [
          "q26-ap"
        ]
      },
      {
        "id": "q26-z-wlc",
        "label_en": "Wireless LAN Controller (WLC)",
        "label_vi": "Bộ điều khiển mạng không dây (WLC)",
        "target_ids": [
          "q26-wlc1",
          "q26-wlc2"
        ]
      }
    ],
    "explanation": "Chức năng cốt lõi của từng thiết bị mạng Cisco:\n- **Firewall**: Lọc gói trạng thái (Stateful inspection), NAT, VPN, IPS, Content Filtering.\n- **Switch**: Chuyển tiếp Ethernet Frame Layer 2 dựa vào bảng MAC (CAM table).\n- **Access Point**: Cầu nối sóng radio 802.11 sang mạng dây Ethernet 802.3.\n- **WLC**: Quản lý tập trung hàng trăm AP qua đường hầm CAPWAP."
  },
  {
    "id": 27,
    "title": "Câu 27: Cấu Tạo Vật Lý Cáp Mạng",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto the cable type on the right.",
    "prompt_vi": "Kéo thả các đặc điểm cấu tạo từ bên trái vào loại cáp tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q27_a.png",
    "answer_image": "images/dnd/dnd_q27_b.png",
    "source_items": [
      {
        "id": "q27-coax",
        "text_en": "contains a conductor, bedding, and sheathing",
        "text_vi": "Chứa lõi kim loại, lớp điện môi đệm cách điện và lớp vỏ bảo vệ"
      },
      {
        "id": "q27-tp",
        "text_en": "affected by electrical and magnetic interference",
        "text_vi": "Dễ bị ảnh hưởng bởi nhiễu điện và từ trường trong môi trường"
      },
      {
        "id": "q27-sm1",
        "text_en": "contains a core, cladding, and coating",
        "text_vi": "Gồm 3 lớp cơ bản: Lõi (Core), Lớp phản xạ (Cladding), và Lớp phủ (Coating)"
      },
      {
        "id": "q27-sm2",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "Cấu tạo từ các sợi thủy tinh silica cách điện truyền ánh sáng"
      }
    ],
    "drop_zones": [
      {
        "id": "q27-z-coax",
        "label_en": "Coaxial Cable",
        "label_vi": "Cáp Đồng Trục (Coaxial)",
        "target_ids": [
          "q27-coax"
        ]
      },
      {
        "id": "q27-z-tp",
        "label_en": "Twisted-Pair Cable",
        "label_vi": "Cáp Xoắn Đôi (Twisted-Pair)",
        "target_ids": [
          "q27-tp"
        ]
      },
      {
        "id": "q27-z-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q27-sm1",
          "q27-sm2"
        ]
      }
    ],
    "explanation": "Cấu tạo các loại cáp:\n- **Coaxial**: Dây truyền hình cáp / DOCSIS, gồm lõi đồng, lớp điện môi (bedding/dielectric) và vỏ chắn nhiễu (sheathing).\n- **Twisted-Pair**: Cáp đồng xoắn đôi, dễ bị nhiễu sóng điện từ EMI.\n- **Single-Mode Fiber**: Lõi quang gồm Core (9 µm), Cladding (125 µm) và lớp vỏ Coating bảo vệ khỏi ẩm và trầy xước."
  },
  {
    "id": 28,
    "title": "Câu 28: Cơ Chế Tin Cậy Tầng Transport: TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the protocol characteristics from the left onto the corresponding protocol types on the right.",
    "prompt_vi": "Kéo thả các đặc tính của giao thức từ bên trái vào nhóm TCP hoặc UDP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q28_a.png",
    "answer_image": "images/dnd/dnd_q28_b.png",
    "source_items": [
      {
        "id": "q28-t1",
        "text_en": "acknowledgment mechanism",
        "text_vi": "Có cơ chế gửi gói tin xác nhận (ACK)"
      },
      {
        "id": "q28-t2",
        "text_en": "guaranteed transmission",
        "text_vi": "Đảm bảo dữ liệu truyền tải thành công 100%"
      },
      {
        "id": "q28-u1",
        "text_en": "no error checking / recovery",
        "text_vi": "Không có cơ chế phục hồi hay truyền lại lỗi"
      },
      {
        "id": "q28-u2",
        "text_en": "low overhead",
        "text_vi": "Chi phí tiêu hao gói tin (Overhead) cực kỳ thấp"
      }
    ],
    "drop_zones": [
      {
        "id": "q28-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q28-t1",
          "q28-t2"
        ]
      },
      {
        "id": "q28-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q28-u1",
          "q28-u2"
        ]
      }
    ],
    "explanation": "- **TCP**: 'Overhead cao nhưng chắc chắn' - Có cơ chế báo nhận ACK, nếu không nhận được ACK trong thời gian timeout thì sẽ truyền lại (Retransmit).\n- **UDP**: 'Nhẹ và nhanh' - Header chỉ 8 byte (Overhead thấp), không có cơ chế sửa lỗi hay phục hồi gói tin bị mất."
  },
  {
    "id": 29,
    "title": "Câu 29: Các Thành Phần Của Chương Trình An Toàn Thông Tin",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the components of a security program from the left onto the corresponding descriptions on the right.",
    "prompt_vi": "Kéo thả các thành phần của chương trình an ninh thông tin từ bên trái vào đúng định nghĩa ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q29_a.png",
    "answer_image": "images/dnd/dnd_q29_b.png",
    "source_items": [
      {
        "id": "q29-policy",
        "text_en": "security policy",
        "text_vi": "Chính sách an toàn (Security Policy)"
      },
      {
        "id": "q29-standard",
        "text_en": "security standard",
        "text_vi": "Tiêu chuẩn an toàn (Security Standard)"
      },
      {
        "id": "q29-aware",
        "text_en": "awareness",
        "text_vi": "Nhận thức an ninh (Awareness)"
      },
      {
        "id": "q29-edu",
        "text_en": "education",
        "text_vi": "Đào tạo mở rộng (Education)"
      },
      {
        "id": "q29-train",
        "text_en": "training",
        "text_vi": "Huấn luyện kỹ năng (Training)"
      }
    ],
    "drop_zones": [
      {
        "id": "q29-z1",
        "label_en": "Document that outlines an organization's security goals and practices, and roles and responsibilities",
        "label_vi": "Tài liệu cấp cao vạch ra mục tiêu, quy định an ninh chung và vai trò trách nhiệm của toàn tổ chức",
        "target_ids": [
          "q29-policy"
        ]
      },
      {
        "id": "q29-z2",
        "label_en": "Tactical document that sets out specific tasks and methods to maintain security",
        "label_vi": "Tài liệu kỹ thuật cụ thể quy định các yêu cầu bắt buộc và phương pháp bảo mật chuẩn",
        "target_ids": [
          "q29-standard"
        ]
      },
      {
        "id": "q29-z3",
        "label_en": "User-awareness learning level that focuses on security practices that all employees must understand",
        "label_vi": "Cấp độ đào tạo cơ bản phổ cập các thói quen an ninh bắt buộc mọi nhân viên phải nắm",
        "target_ids": [
          "q29-aware"
        ]
      },
      {
        "id": "q29-z4",
        "label_en": "User-awareness learning level that focuses on topics and practices beyond what is typically required for the user's job",
        "label_vi": "Cấp độ nâng cao đào tạo chuyên sâu về tư duy và kỹ năng vượt ra ngoài phạm vi công việc thường nhật",
        "target_ids": [
          "q29-edu"
        ]
      },
      {
        "id": "q29-z5",
        "label_en": "User-awareness learning level that focuses on teaching employees how to perform tasks specifically required for their jobs",
        "label_vi": "Cấp độ huấn luyện trực tiếp hướng dẫn nhân viên cách thực thi các tác vụ an toàn phục vụ đúng công việc của họ",
        "target_ids": [
          "q29-train"
        ]
      }
    ],
    "explanation": "Cấu trúc chuẩn về bảo mật tổ chức (Security Governance):\n- **Policy**: Tài liệu chiến lược cao nhất (Bắt buộc phải tuân thủ).\n- **Standard**: Tiêu chuẩn kỹ thuật đo lường cụ thể (như độ dài mật khẩu tối thiểu 12 ký tự).\n- **Awareness**: Nhận thức phổ cập chung (chống phishing, khóa màn hình).\n- **Training**: Rèn luyện kỹ năng thực hành cho công việc cụ thể.\n- **Education**: Giáo dục chuyên sâu mở rộng kiến thức."
  },
  {
    "id": 30,
    "title": "Câu 30: Đặc Trưng Bộ Điều Khiển Không Dây (WLC) vs AP Độc Lập",
    "category": "Network Access",
    "prompt_en": "Drag and drop the characteristics from the left onto the device type on the right.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào loại thiết bị Wireless LAN Controller (WLC) hoặc Autonomous AP tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q30_a.png",
    "answer_image": "images/dnd/dnd_q30_b.png",
    "source_items": [
      {
        "id": "q30-wlc1",
        "text_en": "uses templates to implement QoS configurations",
        "text_vi": "Sử dụng các mẫu (Templates) cấu hình để triển khai QoS đồng loạt"
      },
      {
        "id": "q30-wlc2",
        "text_en": "applies user connection data within a device group",
        "text_vi": "Đồng bộ và áp dụng dữ liệu kết nối của người dùng trong toàn bộ nhóm thiết bị"
      },
      {
        "id": "q30-ap1",
        "text_en": "interconnects wireless LANs to a wired network",
        "text_vi": "Kết nối trực tiếp độc lập mạng không dây vào mạng có dây"
      },
      {
        "id": "q30-ap2",
        "text_en": "requires a special adapter for PoE / standalone deployment",
        "text_vi": "Cần adapter nguồn riêng hoặc cổng PoE để hoạt động độc lập"
      }
    ],
    "drop_zones": [
      {
        "id": "q30-wlc",
        "label_en": "Wireless LAN Controller (WLC)",
        "label_vi": "Bộ Điều Khiển Không Dây (WLC)",
        "target_ids": [
          "q30-wlc1",
          "q30-wlc2"
        ]
      },
      {
        "id": "q30-ap",
        "label_en": "Autonomous Access Point",
        "label_vi": "Access Point Độc Lập (Autonomous AP)",
        "target_ids": [
          "q30-ap1",
          "q30-ap2"
        ]
      }
    ],
    "explanation": "- **WLC**: Quản lý tập trung mọi AP, cho phép áp dụng QoS Profile theo template xuống hàng loạt AP, quản lý roaming người dùng liền mạch giữa các AP trong nhóm (Mobility Group).\n- **Autonomous AP**: Mỗi AP hoạt động độc lập, tự xử lý cả Control Plane và Data Plane, tự cấu hình riêng rẽ từng thiết bị."
  },
  {
    "id": 31,
    "title": "Câu 31: Cấu Hình Định Tuyến Tĩnh (Host A Đến Host B)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. An engineer must configure a static route between two networks so that host A communicates with host B. Drag and drop the commands from the left onto the routers where they must be configured on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kỹ sư cần cấu hình định tuyến tĩnh giữa 2 mạng để Host A có thể liên lạc với Host B. Kéo thả câu lệnh từ bên trái vào đúng Router tương ứng ở bên phải.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q31_a.png",
    "question_image": "images/dnd/dnd_q31_b.png",
    "answer_image": "images/dnd/dnd_q31_c.png",
    "source_items": [
      {
        "id": "q31-r1-cmd",
        "text_en": "ip route 10.10.14.0 255.255.255.0 10.10.10.2",
        "text_vi": "ip route 10.10.14.0 255.255.255.0 10.10.10.2"
      },
      {
        "id": "q31-r2-cmd",
        "text_en": "ip route 10.10.13.0 255.255.255.0 10.10.10.1",
        "text_vi": "ip route 10.10.13.0 255.255.255.0 10.10.10.1"
      },
      {
        "id": "q31-dist1",
        "text_en": "ip route 10.10.14.10 255.255.255.255 10.10.10.6",
        "text_vi": "ip route 10.10.14.10 255.255.255.255 10.10.10.6"
      },
      {
        "id": "q31-dist2",
        "text_en": "ip route 10.10.13.0 255.255.255.128 10.10.10.5",
        "text_vi": "ip route 10.10.13.0 255.255.255.128 10.10.10.5"
      }
    ],
    "drop_zones": [
      {
        "id": "q31-z-r1",
        "label_en": "Router R1",
        "label_vi": "Cấu hình trên Router R1",
        "target_ids": [
          "q31-r1-cmd"
        ]
      },
      {
        "id": "q31-z-r2",
        "label_en": "Router R2",
        "label_vi": "Cấu hình trên Router R2",
        "target_ids": [
          "q31-r2-cmd"
        ]
      }
    ],
    "explanation": "Cú pháp định tuyến tĩnh trong Cisco IOS: `ip route <mạng đích> <subnet mask> <next-hop IP>`:\n- Trên **R1**: Để đến mạng của Host B (10.10.14.0/24), gói tin phải gửi đến next-hop IP của R2 (10.10.10.2) -> `ip route 10.10.14.0 255.255.255.0 10.10.10.2`.\n- Trên **R2**: Để gói tin phản hồi quay về mạng của Host A (10.10.13.0/24), gói tin phải gửi về next-hop IP của R1 (10.10.10.1) -> `ip route 10.10.13.0 255.255.255.0 10.10.10.1`."
  },
  {
    "id": 32,
    "title": "Câu 32: Khớp Tiền Tố Với Subnet Mask (Bảng Định Tuyến)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the learned prefixes from the left onto the subnet masks on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các tiền tố mạng học được từ bên trái vào đúng Subnet Mask dạng thập phân tương ứng ở bên phải.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q32_a.png",
    "question_image": "images/dnd/dnd_q32_b.png",
    "answer_image": "images/dnd/dnd_q32_c.png",
    "source_items": [
      {
        "id": "q32-p23",
        "text_en": "172.16.4.0/23",
        "text_vi": "172.16.4.0/23"
      },
      {
        "id": "q32-p21",
        "text_en": "172.16.3.64/21",
        "text_vi": "172.16.3.64/21"
      },
      {
        "id": "q32-p28",
        "text_en": "172.16.3.128/28",
        "text_vi": "172.16.3.128/28"
      },
      {
        "id": "q32-p29",
        "text_en": "172.16.3.192/29",
        "text_vi": "172.16.3.192/29"
      }
    ],
    "drop_zones": [
      {
        "id": "q32-z-23",
        "label_en": "255.255.254.0",
        "label_vi": "Subnet Mask 255.255.254.0 (/23)",
        "target_ids": [
          "q32-p23"
        ]
      },
      {
        "id": "q32-z-21",
        "label_en": "255.255.248.0",
        "label_vi": "Subnet Mask 255.255.248.0 (/21)",
        "target_ids": [
          "q32-p21"
        ]
      },
      {
        "id": "q32-z-28",
        "label_en": "255.255.255.240",
        "label_vi": "Subnet Mask 255.255.255.240 (/28)",
        "target_ids": [
          "q32-p28"
        ]
      },
      {
        "id": "q32-z-29",
        "label_en": "255.255.255.248",
        "label_vi": "Subnet Mask 255.255.255.248 (/29)",
        "target_ids": [
          "q32-p29"
        ]
      }
    ],
    "explanation": "Quy đổi độ dài bit mạng (CIDR) sang Subnet Mask dạng Decimal:\n- /21 = 255.255.(256 - 8).0 = 255.255.248.0\n- /23 = 255.255.(256 - 2).0 = 255.255.254.0\n- /28 = 255.255.255.(256 - 16) = 255.255.255.240\n- /29 = 255.255.255.(256 - 8) = 255.255.255.248"
  },
  {
    "id": 33,
    "title": "Câu 33: Đặc Trưng Của Giao Diện Northbound API Trong SDN",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the characteristics of northbound APIs from the left onto any position on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính đúng của Northbound API từ bên trái sang khung bên phải. Chú ý: Không phải mọi đặc tính đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q33_a.png",
    "answer_image": "images/dnd/dnd_q33_b.png",
    "source_items": [
      {
        "id": "q33-c1",
        "text_en": "communicates between the SDN controller and the application plane",
        "text_vi": "Giao tiếp giữa bộ điều khiển SDN và tầng ứng dụng (Application Plane)"
      },
      {
        "id": "q33-c2",
        "text_en": "supports REST-based requirements",
        "text_vi": "Hỗ trợ các yêu cầu giao tiếp chuẩn RESTful qua giao thức HTTP/HTTPS"
      },
      {
        "id": "q33-c3",
        "text_en": "supports automation",
        "text_vi": "Hỗ trợ các tập lệnh tự động hóa mạng và tích hợp DevOps"
      },
      {
        "id": "q33-c4",
        "text_en": "supports data sharing between systems",
        "text_vi": "Hỗ trợ chia sẻ dữ liệu và trạng thái mạng giữa các hệ thống phần mềm"
      },
      {
        "id": "q33-d1",
        "text_en": "communicates between the SDN controller and the data plane",
        "text_vi": "Giao tiếp giữa SDN controller và mặt phẳng dữ liệu (Đây là Southbound API)"
      },
      {
        "id": "q33-d2",
        "text_en": "uses OpenFlow to interface between data and control planes",
        "text_vi": "Sử dụng giao thức OpenFlow (Đây là Southbound API)"
      }
    ],
    "drop_zones": [
      {
        "id": "q33-z1",
        "label_en": "Northbound API Characteristic 1",
        "label_vi": "Đặc tính Northbound API 1",
        "target_ids": [
          "q33-c1"
        ]
      },
      {
        "id": "q33-z2",
        "label_en": "Northbound API Characteristic 2",
        "label_vi": "Đặc tính Northbound API 2",
        "target_ids": [
          "q33-c2"
        ]
      },
      {
        "id": "q33-z3",
        "label_en": "Northbound API Characteristic 3",
        "label_vi": "Đặc tính Northbound API 3",
        "target_ids": [
          "q33-c3"
        ]
      },
      {
        "id": "q33-z4",
        "label_en": "Northbound API Characteristic 4",
        "label_vi": "Đặc tính Northbound API 4",
        "target_ids": [
          "q33-c4"
        ]
      }
    ],
    "explanation": "Trong kiến trúc phần mềm định nghĩa mạng (SDN):\n- **Northbound API**: Hướng Bắc, kết nối Controller với các ứng dụng người dùng/doanh nghiệp. Sử dụng REST APIs (HTTP GET/POST), trao đổi dữ liệu JSON/XML, phục vụ tự động hóa và tích hợp phần mềm.\n- **Southbound API**: Hướng Nam, kết nối Controller xuống các thiết bị mạng vật lý (Data Plane). Sử dụng OpenFlow, NETCONF, RESTCONF, SNMP."
  },
  {
    "id": 34,
    "title": "Câu 34: Các Tầng Trong Kiến Trúc Mạng Phân Cấp Cisco",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop functions from the left onto corresponding network topology layer on right.",
    "prompt_vi": "Kéo thả chức năng từ bên trái vào đúng tầng kiến trúc mạng tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q34_a.png",
    "answer_image": "images/dnd/dnd_q34_b.png",
    "source_items": [
      {
        "id": "q34-f-acc",
        "text_en": "connect end users",
        "text_vi": "Kết nối trực tiếp các thiết bị đầu cuối của người dùng (PC, Laptop, Phone)"
      },
      {
        "id": "q34-f-core",
        "text_en": "fast switching",
        "text_vi": "Chuyển mạch tốc độ cực cao, đóng vai trò trục xương sống mạng (Backbone)"
      },
      {
        "id": "q34-f-spine",
        "text_en": "redundant architectures within data centers",
        "text_vi": "Cung cấp kiến trúc dự phòng tối ưu cho lưu lượng Đông-Tây trong Trung tâm Dữ liệu"
      },
      {
        "id": "q34-f-dist",
        "text_en": "aggregate traffic flows from access layer",
        "text_vi": "Gom tụ các luồng lưu lượng từ tầng Access và áp dụng định tuyến/bảo mật Policy"
      }
    ],
    "drop_zones": [
      {
        "id": "q34-z-acc",
        "label_en": "Access Layer",
        "label_vi": "Tầng Truy Cập (Access Layer)",
        "target_ids": [
          "q34-f-acc"
        ]
      },
      {
        "id": "q34-z-core",
        "label_en": "Core Layer",
        "label_vi": "Tầng Lõi (Core Layer)",
        "target_ids": [
          "q34-f-core"
        ]
      },
      {
        "id": "q34-z-spine",
        "label_en": "Spine-Leaf Architecture",
        "label_vi": "Kiến Trúc Spine-Leaf (Data Center)",
        "target_ids": [
          "q34-f-spine"
        ]
      },
      {
        "id": "q34-z-dist",
        "label_en": "Distribution Layer",
        "label_vi": "Tầng Phân Phối (Distribution Layer)",
        "target_ids": [
          "q34-f-dist"
        ]
      }
    ],
    "explanation": "- **Access Layer**: Điểm cắm mạng cho người dùng, cung cấp bảo mật cổng (Port Security), VLAN, PoE.\n- **Distribution Layer**: Ranh giới định tuyến, gom cổng (Aggregation), áp dụng ACL, QoS, chính sách bảo mật.\n- **Core Layer**: Chuyển mạch tốc độ tối đa không trễ (High-speed backbone), tuyệt đối không đặt ACL hay lọc gói tại đây.\n- **Spine-Leaf**: Kiến trúc 2 tầng chuẩn trong Data Center hiện đại giúp khoảng cách giữa 2 server bất kỳ luôn chỉ qua đúng 1 Spine switch."
  },
  {
    "id": 35,
    "title": "Câu 35: Cáp Đồng Xoắn Đôi vs Cáp Sợi Quang",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristics from the left onto the cable types on the right.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào loại cáp xoắn đôi hoặc cáp quang đơn mốt ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q35_a.png",
    "answer_image": "images/dnd/dnd_q35_b.png",
    "source_items": [
      {
        "id": "q35-tp1",
        "text_en": "comprised of shielded and unshielded twisted pairs",
        "text_vi": "Gồm các cặp dây đồng xoắn đôi (STP/UTP)"
      },
      {
        "id": "q35-tp2",
        "text_en": "is affected by electrical and magnetic interference",
        "text_vi": "Bị ảnh hưởng bởi nhiễu điện và từ trường"
      },
      {
        "id": "q35-sm1",
        "text_en": "composed of insulated glass strands",
        "text_vi": "Cấu tạo từ các sợi thủy tinh cách điện"
      },
      {
        "id": "q35-sm2",
        "text_en": "uses a single wavelength of light",
        "text_vi": "Sử dụng một bước sóng ánh sáng duy nhất"
      }
    ],
    "drop_zones": [
      {
        "id": "q35-twisted",
        "label_en": "Twisted-Pair Cabling",
        "label_vi": "Cáp Xoắn Đôi (Twisted-Pair)",
        "target_ids": [
          "q35-tp1",
          "q35-tp2"
        ]
      },
      {
        "id": "q35-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q35-sm1",
          "q35-sm2"
        ]
      }
    ],
    "explanation": "Củng cố kiến thức thi CCNA: Cáp xoắn đôi mang tín hiệu điện nên chịu ảnh hưởng bởi điện từ trường EMI. Cáp quang đơn mốt (SMF) làm bằng thủy tinh và truyền ánh sáng laser đơn bước sóng."
  },
  {
    "id": 36,
    "title": "Câu 36: Biện Pháp Phòng Chống Tấn Công Layer 2 (VACL / DAI / Root Guard / BPDU Guard)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the mitigation techniques from the left onto the types of attack they mitigate on the right.",
    "prompt_vi": "Kéo thả biện pháp phòng chống tấn công từ bên trái vào đúng kiểu tấn công mạng Layer 2 ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q36_a.png",
    "answer_image": "images/dnd/dnd_q36_b.png",
    "source_items": [
      {
        "id": "q36-vacl",
        "text_en": "Configure VACL",
        "text_vi": "Cấu hình VACL (VLAN Access Control List)"
      },
      {
        "id": "q36-dai",
        "text_en": "Configure dynamic ARP inspection",
        "text_vi": "Cấu hình Dynamic ARP Inspection (DAI)"
      },
      {
        "id": "q36-root",
        "text_en": "Configure root guard",
        "text_vi": "Cấu hình Root Guard"
      },
      {
        "id": "q36-bpdu",
        "text_en": "Configure BPDU guard",
        "text_vi": "Cấu hình BPDU Guard"
      }
    ],
    "drop_zones": [
      {
        "id": "q36-z1",
        "label_en": "802.1q double tagging",
        "label_vi": "Tấn công nhảy VLAN bằng thẻ kép (802.1Q double-tagging)",
        "target_ids": [
          "q36-vacl"
        ]
      },
      {
        "id": "q36-z2",
        "label_en": "ARP spoofing",
        "label_vi": "Tấn công giả mạo gói tin ARP (ARP Spoofing / Man-in-the-Middle)",
        "target_ids": [
          "q36-dai"
        ]
      },
      {
        "id": "q36-z3",
        "label_en": "Unwanted superior BPDUs",
        "label_vi": "Gói tin BPDU ưu tiên bất hợp pháp muốn cướp quyền Root Bridge",
        "target_ids": [
          "q36-root"
        ]
      },
      {
        "id": "q36-z4",
        "label_en": "Unwanted BPDUs on PortFast-enabled interfaces",
        "label_vi": "Gói BPDU lạ xuất hiện trên cổng người dùng đã bật PortFast",
        "target_ids": [
          "q36-bpdu"
        ]
      }
    ],
    "explanation": "- **VACL**: Lọc lưu lượng bên trong VLAN, ngăn chặn tấn công 802.1Q Double-Tagging.\n- **DAI (Dynamic ARP Inspection)**: Chống tấn công giả mạo ARP Spoofing/Poisoning.\n- **Root Guard**: Ngăn ngừa switch lậu gửi BPDU tốt hơn để trở thành Root Bridge (đưa cổng về trạng thái root-inconsistent).\n- **BPDU Guard**: Bảo vệ cổng nối máy tính (PortFast), nếu nhận được BPDU thì lập tức shutdown cổng (err-disabled)."
  },
  {
    "id": 37,
    "title": "Câu 37: So Sánh Mạng Truyền Thống vs Mạng Điều Khiển SDN",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the characteristics from the left onto the network types on the right.",
    "prompt_vi": "Kéo thả các đặc trưng từ bên trái vào loại mạng truyền thống hoặc mạng điều khiển Controller-Based ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q37_a.png",
    "answer_image": "images/dnd/dnd_q37_b.png",
    "source_items": [
      {
        "id": "q37-trad1",
        "text_en": "New devices are configured using the physical console / CLI",
        "text_vi": "Thiết bị mới phải được cấu hình thủ công qua cáp Console hoặc dòng lệnh CLI"
      },
      {
        "id": "q37-trad2",
        "text_en": "This type requires a distributed control plane",
        "text_vi": "Yêu cầu mặt phẳng điều khiển phân tán trên từng thiết bị"
      },
      {
        "id": "q37-sdn1",
        "text_en": "This type allows better control over how networks work and are configured",
        "text_vi": "Cho phép kiểm soát toàn diện cách mạng vận hành và cấu hình từ một nơi"
      },
      {
        "id": "q37-sdn2",
        "text_en": "This type enables networks to integrate with applications through APIs",
        "text_vi": "Cho phép mạng tích hợp trực tiếp với ứng dụng phần mềm thông qua các API"
      },
      {
        "id": "q37-sdn3",
        "text_en": "This type provisions resources from a centralized location",
        "text_vi": "Cấp phát và điều phối tài nguyên hạ tầng từ vị trí quản trị tập trung"
      }
    ],
    "drop_zones": [
      {
        "id": "q37-traditional",
        "label_en": "Traditional Networking",
        "label_vi": "Mạng Truyền Thống (Traditional Networking)",
        "target_ids": [
          "q37-trad1",
          "q37-trad2"
        ]
      },
      {
        "id": "q37-controller",
        "label_en": "Controller-Based Networking",
        "label_vi": "Mạng Điều Khiển SDN (Controller-Based Networking)",
        "target_ids": [
          "q37-sdn1",
          "q37-sdn2",
          "q37-sdn3"
        ]
      }
    ],
    "explanation": "- **Mạng truyền thống**: Cấu hình phân tán, thủ công từng hộp (box-by-box) qua CLI/Console, tốn nhân lực, dễ sai sót cấu hình.\n- **Mạng Controller-Based (SDN)**: Quản lý tập trung, cung cấp API (RESTful) kết nối ứng dụng với hạ tầng, tự động hóa provisioning tài nguyên nhanh chóng."
  },
  {
    "id": 38,
    "title": "Câu 38: Đối Chiếu Subnet Mask Dạng Thập Phân Với Tiền Tố",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the prefix lengths from the left onto the corresponding prefixes on the right. Not all prefixes are used.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các Subnet Mask dạng thập phân từ bên trái vào đúng các tiền tố mạng ở bên phải theo bảng định tuyến.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q01_a.png",
    "question_image": "images/dnd/dnd_q38_b.png",
    "answer_image": "images/dnd/dnd_q38_c.png",
    "source_items": [
      {
        "id": "q38-m27",
        "text_en": "255.255.255.224 (/27)",
        "text_vi": "255.255.255.224 (/27)"
      },
      {
        "id": "q38-m28",
        "text_en": "255.255.255.240 (/28)",
        "text_vi": "255.255.255.240 (/28)"
      },
      {
        "id": "q38-m29",
        "text_en": "255.255.255.248 (/29)",
        "text_vi": "255.255.255.248 (/29)"
      },
      {
        "id": "q38-m30",
        "text_en": "255.255.255.252 (/30)",
        "text_vi": "255.255.255.252 (/30)"
      }
    ],
    "drop_zones": [
      {
        "id": "q38-z-p27",
        "label_en": "Prefix /27 (e.g. 209.165.200.224/27)",
        "label_vi": "Tiền tố /27 (ví dụ 209.165.200.224/27)",
        "target_ids": [
          "q38-m27"
        ]
      },
      {
        "id": "q38-z-p28",
        "label_en": "Prefix /28 (e.g. 10.10.13.144/28)",
        "label_vi": "Tiền tố /28 (ví dụ 10.10.13.144/28)",
        "target_ids": [
          "q38-m28"
        ]
      },
      {
        "id": "q38-z-p29",
        "label_en": "Prefix /29 (e.g. 10.10.13.160/29)",
        "label_vi": "Tiền tố /29 (ví dụ 10.10.13.160/29)",
        "target_ids": [
          "q38-m29"
        ]
      },
      {
        "id": "q38-z-p30",
        "label_en": "Prefix /30 (e.g. 10.10.11.0/30)",
        "label_vi": "Tiền tố /30 (ví dụ 10.10.11.0/30)",
        "target_ids": [
          "q38-m30"
        ]
      }
    ],
    "explanation": "Quy đổi nhanh Subnet Mask cho kỳ thi CCNA:\n- /27 = 255.255.255.224 (3 bit 1 cuối: 128+64+32)\n- /28 = 255.255.255.240 (4 bit 1 cuối: 128+64+32+16)\n- /29 = 255.255.255.248 (5 bit 1 cuối: 240+8)\n- /30 = 255.255.255.252 (6 bit 1 cuối: 248+4)"
  },
  {
    "id": 39,
    "title": "Câu 39: Chức Năng Các Tầng Kiến Trúc Mạng Data Center & Campus",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the network topology architecture types from the left onto the corresponding function on the right. Not all architecture types are used.",
    "prompt_vi": "Kéo thả các kiểu kiến trúc mạng từ bên trái vào đúng chức năng của chúng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q39_a.png",
    "answer_image": "images/dnd/dnd_q39_b.png",
    "source_items": [
      {
        "id": "q39-spine",
        "text_en": "spine-leaf",
        "text_vi": "Spine-Leaf"
      },
      {
        "id": "q39-dist",
        "text_en": "distribution",
        "text_vi": "Distribution"
      },
      {
        "id": "q39-core",
        "text_en": "core",
        "text_vi": "Core"
      },
      {
        "id": "q39-edge",
        "text_en": "perimeter edge",
        "text_vi": "Perimeter Edge"
      }
    ],
    "drop_zones": [
      {
        "id": "q39-z1",
        "label_en": "Redundant architectures within data centers (East-West traffic)",
        "label_vi": "Kiến trúc dự phòng cao tối ưu cho Trung tâm Dữ liệu và luồng dữ liệu Đông-Tây",
        "target_ids": [
          "q39-spine"
        ]
      },
      {
        "id": "q39-z2",
        "label_en": "Provide routing, filtering, and WAN access",
        "label_vi": "Thực hiện định tuyến ranh giới, lọc gói an ninh và truy cập kết nối WAN",
        "target_ids": [
          "q39-dist"
        ]
      },
      {
        "id": "q39-z3",
        "label_en": "Switch packets as fast as possible",
        "label_vi": "Chuyển tiếp gói tin với tốc độ nhanh nhất có thể (không lọc gói)",
        "target_ids": [
          "q39-core"
        ]
      }
    ],
    "explanation": "- **Spine-Leaf**: Thiết kế tối ưu cho Data Center hiện đại, loại bỏ hoàn toàn giao thức STP bị chặn cổng, đảm bảo băng thông không nghẽn cho lưu lượng Server-to-Server (East-West).\n- **Distribution**: Cầu nối định tuyến giữa Access và Core, nơi áp dụng các chính sách ACL/QoS.\n- **Core**: Xương sống chuyển mạch tốc độ cao."
  },
  {
    "id": 40,
    "title": "Câu 40: Nhận Diện Đặc Tính Cáp Mạng",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto the cable type on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào đúng loại cáp tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q40_a.png",
    "answer_image": "images/dnd/dnd_q40_b.png",
    "source_items": [
      {
        "id": "q40-coax",
        "text_en": "contains a conductor, bedding, and sheathing",
        "text_vi": "Chứa một lõi đồng dẫn điện, lớp đệm điện môi và lớp vỏ ngoài"
      },
      {
        "id": "q40-tp",
        "text_en": "comprised of shielded or unshielded twisted pairs",
        "text_vi": "Cấu tạo gồm các cặp dây đồng xoắn đôi (STP hoặc UTP)"
      },
      {
        "id": "q40-smf",
        "text_en": "has minimal light reflection as the signal travels down the core",
        "text_vi": "Ánh sáng đi thẳng gần như không có sự phản xạ nhiều góc khi truyền qua lõi"
      },
      {
        "id": "q40-mmf",
        "text_en": "transmits signals using pulses of light (with multiple reflections)",
        "text_vi": "Truyền tín hiệu quang với nhiều góc phản xạ đa mốt (Multimode)"
      }
    ],
    "drop_zones": [
      {
        "id": "q40-z-coax",
        "label_en": "Coaxial Cable",
        "label_vi": "Cáp Đồng Trục (Coaxial)",
        "target_ids": [
          "q40-coax"
        ]
      },
      {
        "id": "q40-z-tp",
        "label_en": "Twisted-Pair Cable",
        "label_vi": "Cáp Xoắn Đôi (Twisted-Pair)",
        "target_ids": [
          "q40-tp"
        ]
      },
      {
        "id": "q40-z-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q40-smf"
        ]
      },
      {
        "id": "q40-z-mmf",
        "label_en": "Multimode Fiber (MMF)",
        "label_vi": "Cáp Quang Đa Mốt (Multimode Fiber)",
        "target_ids": [
          "q40-mmf"
        ]
      }
    ],
    "explanation": "- **Coaxial**: Cáp đồng trục có lõi dẫn, lớp điện môi (bedding) và vỏ chống nhiễu.\n- **Twisted-Pair**: Cáp đồng mạng thông dụng (Cat5e/Cat6).\n- **Single-Mode Fiber**: Lõi 9 µm quá nhỏ nên ánh sáng đi thẳng, tối thiểu phản xạ, không bị tán sắc mode.\n- **Multimode Fiber**: Lõi lớn (50-62.5 µm), tia sáng phản xạ dội liên tục vào thành cladding."
  },
  {
    "id": 41,
    "title": "Câu 41: Các Phương Thức Xác Thực Bảo Mật (Sinh Trắc Học / MFA / Chứng Chỉ Số)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the descriptions of security features from the left onto the corresponding features on the right.",
    "prompt_vi": "Kéo thả các mô tả phương thức bảo mật từ bên trái vào đúng tính năng xác thực ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q41_a.png",
    "answer_image": "images/dnd/dnd_q41_b.png",
    "source_items": [
      {
        "id": "q41-bio1",
        "text_en": "may use a fingerprint reader to authenticate users",
        "text_vi": "Có thể sử dụng đầu đọc vân tay hoặc quét mống mắt để xác thực người dùng"
      },
      {
        "id": "q41-bio2",
        "text_en": "relies on a 'something you are' paradigm",
        "text_vi": "Dựa trên nguyên lý 'thứ bạn là' (đặc điểm sinh học tự nhiên của con người)"
      },
      {
        "id": "q41-cert1",
        "text_en": "supports enterprise, third party, and public options",
        "text_vi": "Hỗ trợ chứng chỉ nội bộ doanh nghiệp (Private CA) hoặc từ tổ chức công cộng (Public CA)"
      },
      {
        "id": "q41-cert2",
        "text_en": "issuer may revoke the digital certificate",
        "text_vi": "Đơn vị phát hành (CA) có thể thu hồi chứng chỉ bất kỳ lúc nào qua danh sách CRL/OCSP"
      },
      {
        "id": "q41-mfa1",
        "text_en": "may use time-based or one-time passwords to authenticate users",
        "text_vi": "Có thể dùng mã xác thực dùng một lần OTP hoặc dựa trên thời gian TOTP"
      },
      {
        "id": "q41-mfa2",
        "text_en": "requires two or more authentication methods to verify a user's identity",
        "text_vi": "Bắt buộc kết hợp từ hai yếu tố xác thực độc lập trở lên để xác nhận danh tính"
      }
    ],
    "drop_zones": [
      {
        "id": "q41-z-bio",
        "label_en": "Biometrics",
        "label_vi": "Xác Thực Sinh Trắc Học (Biometrics)",
        "target_ids": [
          "q41-bio1",
          "q41-bio2"
        ]
      },
      {
        "id": "q41-z-cert",
        "label_en": "Digital Certificates",
        "label_vi": "Chứng Chỉ Số (Digital Certificates / PKI)",
        "target_ids": [
          "q41-cert1",
          "q41-cert2"
        ]
      },
      {
        "id": "q41-z-mfa",
        "label_en": "Multifactor Authentication (MFA)",
        "label_vi": "Xác Thực Đa Yếu Tố (MFA)",
        "target_ids": [
          "q41-mfa1",
          "q41-mfa2"
        ]
      }
    ],
    "explanation": "3 trụ cột xác thực người dùng trong an ninh mạng:\n1. **Biometrics (Sinh trắc học)**: Yếu tố 'Something you are' (vân tay, khuôn mặt, mống mắt, giọng nói).\n2. **Digital Certificates**: Hạ tầng khóa công khai PKI, được cấp bởi Certificate Authority (CA), có thể bị thu hồi qua CRL (Certificate Revocation List).\n3. **Multifactor Authentication (MFA)**: Kết hợp ít nhất 2 trong 3 yếu tố: Cái bạn biết (Mật khẩu), Cái bạn có (Token OTP / Smartcard), Cái bạn là (Vân tay)."
  },
  {
    "id": 42,
    "title": "Câu 42: Biện Pháp Chống Tấn Công Layer 2 (Native VLAN / 802.1X / DHCP / DTP)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the mitigation techniques from the left onto the attack types they mitigate on the right.",
    "prompt_vi": "Kéo thả biện pháp khắc phục từ bên trái vào đúng hình thức tấn công Layer 2 tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q42_a.png",
    "answer_image": "images/dnd/dnd_q42_b.png",
    "source_items": [
      {
        "id": "q42-nvlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID",
        "text_vi": "Cấu hình Native VLAN thành một VLAN ID khác mặc định (khác VLAN 1)"
      },
      {
        "id": "q42-dot1x",
        "text_en": "configure 802.1x authentication",
        "text_vi": "Cấu hình xác thực người dùng qua cổng 802.1X (RADIUS)"
      },
      {
        "id": "q42-dhcp",
        "text_en": "configure DHCP snooping",
        "text_vi": "Cấu hình tính năng DHCP Snooping"
      },
      {
        "id": "q42-dtp",
        "text_en": "disable DTP (Dynamic Trunking Protocol)",
        "text_vi": "Vô hiệu hóa giao thức đàm phán đường trung kế tự động DTP"
      }
    ],
    "drop_zones": [
      {
        "id": "q42-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "label_vi": "Tấn công nhảy VLAN bằng thẻ kép (802.1Q double-tagging)",
        "target_ids": [
          "q42-nvlan"
        ]
      },
      {
        "id": "q42-z2",
        "label_en": "MAC flooding attack",
        "label_vi": "Tấn công làm tràn bảng MAC (MAC Flooding Attack)",
        "target_ids": [
          "q42-dot1x"
        ]
      },
      {
        "id": "q42-z3",
        "label_en": "Man-in-the-middle spoofing attack",
        "label_vi": "Tấn công giả mạo trung gian MITM (qua DHCP lậu)",
        "target_ids": [
          "q42-dhcp"
        ]
      },
      {
        "id": "q42-z4",
        "label_en": "Switch-spoofing VLAN-hopping attack",
        "label_vi": "Tấn công giả mạo switch để đàm phán kênh Trunk (Switch-spoofing)",
        "target_ids": [
          "q42-dtp"
        ]
      }
    ],
    "explanation": "Cách đối phó các cuộc tấn công Layer 2 kinh điển:\n- **802.1Q Double Tagging**: Đổi Native VLAN trên trunk sang VLAN ID không dùng (ví dụ VLAN 999) và bật `vlan dot1q tag native`.\n- **Switch Spoofing**: Tắt đàm phán DTP tự động bằng lệnh `switchport nonegotiate` hoặc đặt cố định `switchport mode access`.\n- **Man-in-the-Middle**: Bật DHCP Snooping để ngăn chặn máy chủ DHCP giả mạo phát gateway/DNS ảo.\n- **MAC Flooding**: Trong bài thi Cisco chuẩn này, kết hợp 802.1X để chỉ cho phép thiết bị hợp lệ gửi traffic."
  },
  {
    "id": 43,
    "title": "Câu 43: Các Thuật Ngữ Cốt Lõi Của Mô Hình AAA",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA terms from the left onto the descriptions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ AAA từ bên trái vào đúng mô tả vai trò ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q43_a.png",
    "answer_image": "images/dnd/dnd_q43_b.png",
    "source_items": [
      {
        "id": "q43-accounting",
        "text_en": "accounting",
        "text_vi": "Accounting (Ghi nhật ký)"
      },
      {
        "id": "q43-authorization",
        "text_en": "authorization",
        "text_vi": "Authorization (Phân quyền)"
      },
      {
        "id": "q43-authentication",
        "text_en": "authentication",
        "text_vi": "Authentication (Xác thực)"
      }
    ],
    "drop_zones": [
      {
        "id": "q43-z1",
        "label_en": "Tracks activity and resource consumption",
        "label_vi": "Theo dõi và ghi nhận chi tiết các hoạt động, thời gian và tài nguyên mạng đã sử dụng",
        "target_ids": [
          "q43-accounting"
        ]
      },
      {
        "id": "q43-z2",
        "label_en": "Verifies access rights and regulates session attributes",
        "label_vi": "Kiểm tra quyền hạn được phép làm gì và điều tiết các tham số phiên làm việc",
        "target_ids": [
          "q43-authorization"
        ]
      },
      {
        "id": "q43-z3",
        "label_en": "Verifies identity",
        "label_vi": "Kiểm tra và xác minh danh tính người dùng (họ là ai)",
        "target_ids": [
          "q43-authentication"
        ]
      }
    ],
    "explanation": "Mô hình bảo mật 3 chữ A (AAA):\n1. **Authentication (Xác thực)**: 'Bạn là ai?' -> Kiểm tra Username/Password hoặc chứng chỉ.\n2. **Authorization (Phân quyền)**: 'Bạn được phép làm những gì?' -> Kiểm tra quyền hạn, các lệnh CLI được phép gõ.\n3. **Accounting (Ghi nhật ký)**: 'Bạn đã làm những gì?' -> Ghi lại nhật ký lệnh đã chạy, dung lượng đã tải, thời gian online."
  },
  {
    "id": 44,
    "title": "Câu 44: Chi Tiết Hoạt Động Của Các Dịch Vụ AAA",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the statements about AAA services from the left onto the AAA services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các phát biểu về dịch vụ AAA từ bên trái vào đúng dịch vụ Authentication, Authorization hoặc Accounting ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q44_a.png",
    "answer_image": "images/dnd/dnd_q44_b.png",
    "source_items": [
      {
        "id": "q44-auth1",
        "text_en": "It permits and denies login attempts.",
        "text_vi": "Cho phép hoặc từ chối các nỗ lực đăng nhập vào hệ thống"
      },
      {
        "id": "q44-auth2",
        "text_en": "It supports local, PPP, RADIUS, and TACACS+ options.",
        "text_vi": "Hỗ trợ cơ sở dữ liệu local, giao thức PPP, RADIUS và TACACS+"
      },
      {
        "id": "q44-autho1",
        "text_en": "It restricts the CLI commands that a user is able to perform.",
        "text_vi": "Giới hạn các câu lệnh CLI cụ thể mà người dùng được phép thực thi"
      },
      {
        "id": "q44-autho2",
        "text_en": "It assigns per-user attributes.",
        "text_vi": "Gán các thuộc tính và quyền hạn riêng biệt cho từng người dùng (Privilege level)"
      },
      {
        "id": "q44-acc1",
        "text_en": "It tracks the services the user is using.",
        "text_vi": "Theo dõi các dịch vụ và tài nguyên mạng mà người dùng đang truy cập"
      },
      {
        "id": "q44-acc2",
        "text_en": "It records the amount of network resources consumed by the user.",
        "text_vi": "Ghi nhận dung lượng băng thông và tài nguyên mạng người dùng đã tiêu thụ"
      }
    ],
    "drop_zones": [
      {
        "id": "q44-z-auth",
        "label_en": "Authentication",
        "label_vi": "Authentication (Xác thực)",
        "target_ids": [
          "q44-auth1",
          "q44-auth2"
        ]
      },
      {
        "id": "q44-z-autho",
        "label_en": "Authorization",
        "label_vi": "Authorization (Phân quyền)",
        "target_ids": [
          "q44-autho1",
          "q44-autho2"
        ]
      },
      {
        "id": "q44-z-acc",
        "label_en": "Accounting",
        "label_vi": "Accounting (Kiểm toán/Ghi chép)",
        "target_ids": [
          "q44-acc1",
          "q44-acc2"
        ]
      }
    ],
    "explanation": "- **Authentication**: Cổng gác kiểm soát đăng nhập login permit/deny qua Local DB, RADIUS, TACACS+.\n- **Authorization**: Phân quyền lệnh CLI (Command Authorization) và gán thuộc tính người dùng (AV-Pairs).\n- **Accounting**: Ghi chép thống kê tài nguyên, gửi bản tin Start/Stop accounting về server."
  },
  {
    "id": 45,
    "title": "Câu 45: Trình Tự Cấu Hình Bảo Mật Cổng (Port Security)",
    "category": "Security Fundamentals",
    "prompt_en": "An engineer is tasked to configure a switch with port security to ensure devices that forward unicasts, multicasts, and broadcasts are unable to flood the port. The port must be configured to permit only two random MAC addresses at a time. Drag and drop the configuration commands from the left onto the sequence on the right. Not all commands are used.",
    "prompt_vi": "Kỹ sư cần cấu hình Port Security trên cổng switch để chỉ cho phép tối đa 2 địa chỉ MAC bất kỳ cùng lúc và khóa cổng nếu vi phạm. Kéo thả các câu lệnh cấu hình theo đúng trình tự từ bước 1 đến bước 4.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q45_a.png",
    "answer_image": "images/dnd/dnd_q45_b.png",
    "source_items": [
      {
        "id": "q45-cmd1",
        "text_en": "switchport mode access",
        "text_vi": "switchport mode access (Chuyển cổng sang chế độ Access)"
      },
      {
        "id": "q45-cmd2",
        "text_en": "switchport port-security",
        "text_vi": "switchport port-security (Kích hoạt tính năng bảo mật cổng)"
      },
      {
        "id": "q45-cmd3",
        "text_en": "switchport port-security maximum 2",
        "text_vi": "switchport port-security maximum 2 (Giới hạn tối đa 2 địa chỉ MAC)"
      },
      {
        "id": "q45-cmd4",
        "text_en": "switchport port-security violation shutdown",
        "text_vi": "switchport port-security violation shutdown (Tắt cổng khi vi phạm)"
      },
      {
        "id": "q45-cmd-dist1",
        "text_en": "switchport port-security mac-address sticky",
        "text_vi": "switchport port-security mac-address sticky (Không yêu cầu MAC sticky tĩnh)"
      },
      {
        "id": "q45-cmd-dist2",
        "text_en": "switchport port-security mac-address 0060.3QD.77AB",
        "text_vi": "switchport port-security mac-address ... (Gán MAC tĩnh - Không dùng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q45-s1",
        "label_en": "Step 1",
        "label_vi": "Bước 1: Chuyển cổng sang Access",
        "target_ids": [
          "q45-cmd1"
        ]
      },
      {
        "id": "q45-s2",
        "label_en": "Step 2",
        "label_vi": "Bước 2: Bật Port Security",
        "target_ids": [
          "q45-cmd2"
        ]
      },
      {
        "id": "q45-s3",
        "label_en": "Step 3",
        "label_vi": "Bước 3: Đặt ngưỡng tối đa 2 MAC",
        "target_ids": [
          "q45-cmd3"
        ]
      },
      {
        "id": "q45-s4",
        "label_en": "Step 4",
        "label_vi": "Bước 4: Đặt chế độ phạt vi phạm Shutdown",
        "target_ids": [
          "q45-cmd4"
        ]
      }
    ],
    "explanation": "Quy tắc cấu hình Port Security trên Switch Cisco:\n1. Bắt buộc chuyển cổng sang mode Access: `switchport mode access` (Port Security không chạy trên cổng Dynamic).\n2. Bật tính năng: `switchport port-security`.\n3. Đặt số lượng MAC tối đa: `switchport port-security maximum 2`.\n4. Đặt chế độ xử phạt vi phạm: `switchport port-security violation shutdown` (đưa cổng vào trạng thái err-disabled khi có MAC thứ 3 xuất hiện)."
  },
  {
    "id": 46,
    "title": "Câu 46: Phân Loại Chức Năng Dịch Vụ AAA",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the statements about AAA services from the left to the corresponding AAA services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các phát biểu về dịch vụ AAA từ bên trái vào đúng dịch vụ Authentication, Authorization hoặc Accounting tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q46_a.png",
    "answer_image": "images/dnd/dnd_q46_b.png",
    "source_items": [
      {
        "id": "q46-auth1",
        "text_en": "It performs user validation via TACACS+.",
        "text_vi": "Thực hiện xác thực danh tính người dùng thông qua TACACS+"
      },
      {
        "id": "q46-auth2",
        "text_en": "It verifies 'who you are'.",
        "text_vi": "Kiểm tra và trả lời câu hỏi 'bạn là ai'"
      },
      {
        "id": "q46-autho1",
        "text_en": "It grants access to network assets, such as FTP servers.",
        "text_vi": "Cấp quyền truy cập vào các tài nguyên mạng (như máy chủ FTP)"
      },
      {
        "id": "q46-autho2",
        "text_en": "It restricts the CLI commands that a user is able to perform.",
        "text_vi": "Giới hạn các câu lệnh CLI cụ thể mà người dùng được phép thực thi"
      },
      {
        "id": "q46-acc1",
        "text_en": "It records the duration of each connection.",
        "text_vi": "Ghi nhận chính xác khoảng thời gian của từng phiên kết nối"
      },
      {
        "id": "q46-acc2",
        "text_en": "It supports User Access Reporting.",
        "text_vi": "Hỗ trợ xuất báo cáo kiểm toán truy cập của người dùng"
      }
    ],
    "drop_zones": [
      {
        "id": "q46-z-auth",
        "label_en": "Authentication",
        "label_vi": "Authentication (Xác thực)",
        "target_ids": [
          "q46-auth1",
          "q46-auth2"
        ]
      },
      {
        "id": "q46-z-autho",
        "label_en": "Authorization",
        "label_vi": "Authorization (Phân quyền)",
        "target_ids": [
          "q46-autho1",
          "q46-autho2"
        ]
      },
      {
        "id": "q46-z-acc",
        "label_en": "Accounting",
        "label_vi": "Accounting (Kiểm toán / Ghi nhật ký)",
        "target_ids": [
          "q46-acc1",
          "q46-acc2"
        ]
      }
    ],
    "explanation": "Chi tiết các dịch vụ AAA:\n- **Authentication**: Xác minh danh tính người dùng qua TACACS+/RADIUS, trả lời câu hỏi 'Who you are'.\n- **Authorization**: Quyết định quyền truy cập tài nguyên (FTP, Web) và giới hạn quyền chạy lệnh CLI.\n- **Accounting**: Ghi lại thời lượng kết nối (duration) và xuất báo cáo User Access Reporting phục vụ kiểm toán."
  },
  {
    "id": 47,
    "title": "Câu 47: Gán Loại Lưu Lượng Vào Cơ Chế QoS",
    "category": "IP Services",
    "prompt_en": "Drag and drop the traffic types from the left onto the QoS delivery mechanisms on the right.",
    "prompt_vi": "Kéo thả các loại lưu lượng mạng từ bên trái vào đúng cơ chế chuyển phát QoS phù hợp ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q47_a.png",
    "answer_image": "images/dnd/dnd_q47_b.png",
    "source_items": [
      {
        "id": "q47-web",
        "text_en": "standard Web browsing traffic",
        "text_vi": "Lưu lượng duyệt web tiêu chuẩn (HTTP/HTTPS)"
      },
      {
        "id": "q47-voip",
        "text_en": "VoIP traffic",
        "text_vi": "Lưu lượng thoại trực tuyến VoIP"
      },
      {
        "id": "q47-video",
        "text_en": "video traffic",
        "text_vi": "Lưu lượng phát video trực tiếp (Video streaming)"
      },
      {
        "id": "q47-db",
        "text_en": "database synchronization traffic",
        "text_vi": "Lưu lượng đồng bộ hóa cơ sở dữ liệu (Database sync)"
      }
    ],
    "drop_zones": [
      {
        "id": "q47-z-best",
        "label_en": "Best Effort",
        "label_vi": "Cơ chế Best Effort (Không ưu tiên)",
        "target_ids": [
          "q47-web"
        ]
      },
      {
        "id": "q47-z-pq",
        "label_en": "Priority Queue (PQ)",
        "label_vi": "Hàng Đợi Tuyệt Đối Ưu Tiên (Priority Queue)",
        "target_ids": [
          "q47-voip"
        ]
      },
      {
        "id": "q47-z-policing",
        "label_en": "Policing / Shaping",
        "label_vi": "Cơ chế Điều Hòa / Giới Hạn Băng Thông (Policing / Shaping)",
        "target_ids": [
          "q47-video",
          "q47-db"
        ]
      }
    ],
    "explanation": "Nguyên lý xếp loại lưu lượng QoS:\n- **VoIP**: Cực kỳ nhạy cảm với độ trễ (Delay) và jitter -> Bắt buộc đưa vào **Priority Queue (PQ)** để được truyền đi trước tiên.\n- **Web browsing**: Không nhạy cảm với trễ, có cơ chế TCP truyền lại -> Dùng cơ chế mặc định **Best Effort**.\n- **Video / Database Sync**: Băng thông lớn cần được định lượng bằng **Policing** (hạ tốc độ nếu vượt ngưỡng) hoặc **Shaping** (làm mượt lưu lượng qua bộ đệm)."
  },
  {
    "id": 48,
    "title": "Câu 48: Cấu Hình Mật Khẩu Mã Hóa Cho Lệnh Enable",
    "category": "Security Fundamentals",
    "prompt_en": "An engineer is configuring an encrypted password for the enable command on a router where local user database has already been configured. Drag and drop the configuration commands from the left into the correct sequence on the right. Not all commands are used.",
    "prompt_vi": "Kỹ sư đang cấu hình mật khẩu mã hóa cho chế độ Privileged EXEC (lệnh enable) trên router. Kéo thả các câu lệnh cấu hình theo đúng trình tự thực thi từ bước 1 đến bước 4.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q48_a.png",
    "answer_image": "images/dnd/dnd_q48_b.png",
    "source_items": [
      {
        "id": "q48-c1",
        "text_en": "configure terminal",
        "text_vi": "configure terminal (Vào chế độ Global Configuration)"
      },
      {
        "id": "q48-c2",
        "text_en": "enable secret shfl@4fs",
        "text_vi": "enable secret shfl@4fs (Đặt mật khẩu enable mã hóa hash)"
      },
      {
        "id": "q48-c3",
        "text_en": "service password-encryption",
        "text_vi": "service password-encryption (Mã hóa toàn bộ mật khẩu dạng plain-text)"
      },
      {
        "id": "q48-c4",
        "text_en": "exit",
        "text_vi": "exit (Thoát ra chế độ cấu hình)"
      },
      {
        "id": "q48-dist1",
        "text_en": "enable password shfl@4fs",
        "text_vi": "enable password ... (Lệnh cũ không an toàn - Không dùng)"
      },
      {
        "id": "q48-dist2",
        "text_en": "line vty 0 4",
        "text_vi": "line vty 0 4 (Cấu hình Telnet/SSH - Không dùng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q48-s1",
        "label_en": "First Command",
        "label_vi": "Bước 1: Vào cấu hình toàn cục",
        "target_ids": [
          "q48-c1"
        ]
      },
      {
        "id": "q48-s2",
        "label_en": "Second Command",
        "label_vi": "Bước 2: Đặt mật khẩu enable bí mật",
        "target_ids": [
          "q48-c2"
        ]
      },
      {
        "id": "q48-s3",
        "label_en": "Third Command",
        "label_vi": "Bước 3: Bật mã hóa mật khẩu hệ thống",
        "target_ids": [
          "q48-c3"
        ]
      },
      {
        "id": "q48-s4",
        "label_en": "Fourth Command",
        "label_vi": "Bước 4: Thoát khỏi chế độ cấu hình",
        "target_ids": [
          "q48-c4"
        ]
      }
    ],
    "explanation": "Quy trình chuẩn trên Cisco IOS:\n1. `configure terminal`: Chuyển từ Privileged EXEC sang Global Configuration mode.\n2. `enable secret <pass>`: Đặt mật khẩu được mã hóa băm một chiều (MD5/SHA-256) cho lệnh enable (ưu tiên hơn `enable password`).\n3. `service password-encryption`: Bật tính năng mã hóa kiểu Vigenere (Type 7) cho tất cả các mật khẩu dạng plain text trong running-config.\n4. `exit`: Trở lại chế độ dòng lệnh thông thường."
  },
  {
    "id": 49,
    "title": "Câu 49: Trình Tự Các Bước Truy Vấn DNS Tiêu Chuẩn",
    "category": "IP Services",
    "prompt_en": "Drag and drop the steps in a standard DNS lookup operation from the left into the correct order on the right.",
    "prompt_vi": "Kéo thả các bước trong một tiến trình phân giải tên miền DNS chuẩn từ bên trái vào đúng thứ tự thời gian từ bước 1 đến bước 5 ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q49_a.png",
    "answer_image": "images/dnd/dnd_q49_b.png",
    "source_items": [
      {
        "id": "q49-s1",
        "text_en": "An endpoint submits a request for the IP address of a domain name.",
        "text_vi": "1. Thiết bị đầu cuối gửi yêu cầu truy vấn địa chỉ IP của một tên miền"
      },
      {
        "id": "q49-s2",
        "text_en": "The local DNS submits a request to the root DNS server.",
        "text_vi": "2. Máy chủ DNS cục bộ gửi yêu cầu truy vấn lên máy chủ Root DNS server"
      },
      {
        "id": "q49-s3",
        "text_en": "The local DNS submits a request to the domain/TLD DNS server.",
        "text_vi": "3. Máy chủ DNS cục bộ gửi yêu cầu tới máy chủ quản lý đuôi tên miền (TLD DNS server)"
      },
      {
        "id": "q49-s4",
        "text_en": "The local DNS receives a reply from the authoritative domain DNS server.",
        "text_vi": "4. Máy chủ DNS cục bộ nhận câu trả lời IP chính thức từ Authoritative DNS server"
      },
      {
        "id": "q49-s5",
        "text_en": "The DNS server responds to the endpoint with the IP address.",
        "text_vi": "5. Máy chủ DNS cục bộ phản hồi kết quả địa chỉ IP về cho thiết bị đầu cuối"
      }
    ],
    "drop_zones": [
      {
        "id": "q49-z1",
        "label_en": "Step 1",
        "label_vi": "Bước 1",
        "target_ids": [
          "q49-s1"
        ]
      },
      {
        "id": "q49-z2",
        "label_en": "Step 2",
        "label_vi": "Bước 2",
        "target_ids": [
          "q49-s2"
        ]
      },
      {
        "id": "q49-z3",
        "label_en": "Step 3",
        "label_vi": "Bước 3",
        "target_ids": [
          "q49-s3"
        ]
      },
      {
        "id": "q49-z4",
        "label_en": "Step 4",
        "label_vi": "Bước 4",
        "target_ids": [
          "q49-s4"
        ]
      },
      {
        "id": "q49-z5",
        "label_en": "Step 5",
        "label_vi": "Bước 5",
        "target_ids": [
          "q49-s5"
        ]
      }
    ],
    "explanation": "Quy trình phân giải DNS đệ quy (Recursive DNS Lookup):\n1. Máy trạm (PC) hỏi DNS Server cục bộ (Local Resolver).\n2. Local Resolver hỏi Root Name Server (`.` root).\n3. Local Resolver hỏi TLD Server (`.com`, `.net`, `.vn`).\n4. Local Resolver hỏi Authoritative Name Server của tên miền và nhận IP.\n5. Local Resolver lưu cache và trả IP về cho PC."
  },
  {
    "id": 50,
    "title": "Câu 50: So Sánh Giao Thức Bảo Mật RADIUS vs TACACS+",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the functions of AAA supporting protocols from the left onto the protocols on the right.",
    "prompt_vi": "Kéo thả các đặc tính kỹ thuật từ bên trái vào giao thức RADIUS hoặc TACACS+ tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q50_a.png",
    "answer_image": "images/dnd/dnd_q50_b.png",
    "source_items": [
      {
        "id": "q50-rad1",
        "text_en": "encrypts only the password when it sends an access-request",
        "text_vi": "Chỉ mã hóa mật khẩu khi gửi gói tin truy cập (Access-Request packet)"
      },
      {
        "id": "q50-rad2",
        "text_en": "combines authentication and authorization",
        "text_vi": "Kết hợp chung 2 chức năng Authentication và Authorization làm một"
      },
      {
        "id": "q50-rad3",
        "text_en": "uses UDP",
        "text_vi": "Sử dụng giao thức truyền tải UDP (cổng 1812/1813 hoặc 1645/1646)"
      },
      {
        "id": "q50-tac1",
        "text_en": "encrypts the entire body of the access-request packet",
        "text_vi": "Mã hóa toàn bộ nội dung (Body) của gói tin mạng (chỉ chừa lại header)"
      },
      {
        "id": "q50-tac2",
        "text_en": "separates all three AAA operations",
        "text_vi": "Tách biệt hoàn toàn độc lập 3 chức năng Authentication, Authorization, Accounting"
      },
      {
        "id": "q50-tac3",
        "text_en": "uses TCP",
        "text_vi": "Sử dụng giao thức truyền tải tin cậy TCP (cổng 49)"
      }
    ],
    "drop_zones": [
      {
        "id": "q50-radius",
        "label_en": "RADIUS",
        "label_vi": "Giao thức RADIUS (Chuẩn mở IETF)",
        "target_ids": [
          "q50-rad1",
          "q50-rad2",
          "q50-rad3"
        ]
      },
      {
        "id": "q50-tacacs",
        "label_en": "TACACS+",
        "label_vi": "Giao thức TACACS+ (Chuẩn Cisco)",
        "target_ids": [
          "q50-tac1",
          "q50-tac2",
          "q50-tac3"
        ]
      }
    ],
    "explanation": "Bảng so sánh kinh điển RADIUS vs TACACS+ trong CCNA:\n- **RADIUS**: Chuẩn mở (Open Standard), dùng UDP (1812/1813), gom chung Authentication & Authorization, chỉ mã hóa trường Password.\n- **TACACS+**: Độc quyền Cisco (Cisco Proprietary), dùng TCP (port 49), tách rời 3 dịch vụ AAA (rất mạnh khi phân quyền từng lệnh CLI), mã hóa toàn bộ thân gói tin (Payload)."
  },
  {
    "id": 51,
    "title": "Câu 51: Phòng Chống Tấn Công Layer 2 Nâng Cao (Biến thể 1)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.",
    "prompt_vi": "Kéo thả các giải pháp phòng chống từ bên trái vào đúng kiểu tấn công Layer 2 tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q51_a.png",
    "answer_image": "images/dnd/dnd_q51_b.png",
    "source_items": [
      {
        "id": "q51-m-vlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID",
        "text_vi": "Cấu hình Native VLAN với một VLAN ID khác mặc định (khác VLAN 1)"
      },
      {
        "id": "q51-m-dtp",
        "text_en": "disable Dynamic Trunking Protocol (DTP)",
        "text_vi": "Vô hiệu hóa giao thức đàm phán kênh Trunk DTP"
      },
      {
        "id": "q51-m-dhcp",
        "text_en": "configure DHCP snooping",
        "text_vi": "Cấu hình tính năng DHCP Snooping"
      },
      {
        "id": "q51-m-dot1x",
        "text_en": "configure 802.1X authentication",
        "text_vi": "Cấu hình xác thực người dùng 802.1X"
      }
    ],
    "drop_zones": [
      {
        "id": "q51-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "label_vi": "Tấn công nhảy VLAN bằng gắn thẻ kép 802.1Q",
        "target_ids": [
          "q51-m-vlan"
        ]
      },
      {
        "id": "q51-z2",
        "label_en": "switch-spoofing VLAN-hopping attack",
        "label_vi": "Tấn công nhảy VLAN bằng giả mạo switch đàm phán Trunk",
        "target_ids": [
          "q51-m-dtp"
        ]
      },
      {
        "id": "q51-z3",
        "label_en": "man-in-the-middle spoofing attack",
        "label_vi": "Tấn công kẻ đứng giữa (MITM) qua DHCP Server lậu",
        "target_ids": [
          "q51-m-dhcp"
        ]
      },
      {
        "id": "q51-z4",
        "label_en": "MAC flooding attack",
        "label_vi": "Tấn công làm tràn ngập bảng địa chỉ MAC switch",
        "target_ids": [
          "q51-m-dot1x"
        ]
      }
    ],
    "explanation": "Biện pháp phòng thủ Layer 2:\n- Double Tagging -> Thay đổi Native VLAN khác 1.\n- Switch Spoofing -> Tắt DTP bằng `switchport nonegotiate`.\n- MITM qua DHCP -> Bật DHCP Snooping.\n- MAC Flooding -> Bật 802.1X / Port Security."
  },
  {
    "id": 52,
    "title": "Câu 52: Phòng Chống Tấn Công Layer 2 Nâng Cao (Biến thể 2)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.",
    "prompt_vi": "Kéo thả các biện pháp phòng chống từ bên trái vào đúng kiểu tấn công Layer 2 ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q52_a.png",
    "answer_image": "images/dnd/dnd_q52_b.png",
    "source_items": [
      {
        "id": "q52-m-vlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID",
        "text_vi": "Cấu hình Native VLAN khác mặc định (khác VLAN 1)"
      },
      {
        "id": "q52-m-dtp",
        "text_en": "disable Dynamic Trunking Protocol (DTP)",
        "text_vi": "Tắt giao thức đàm phán kênh Trunk DTP"
      },
      {
        "id": "q52-m-dhcp",
        "text_en": "configure DHCP snooping",
        "text_vi": "Cấu hình tính năng DHCP Snooping"
      }
    ],
    "drop_zones": [
      {
        "id": "q52-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "label_vi": "Tấn công nhảy VLAN thẻ kép 802.1Q",
        "target_ids": [
          "q52-m-vlan"
        ]
      },
      {
        "id": "q52-z2",
        "label_en": "switch-spoofing VLAN-hopping attack",
        "label_vi": "Tấn công giả mạo switch đàm phán Trunk",
        "target_ids": [
          "q52-m-dtp"
        ]
      },
      {
        "id": "q52-z3",
        "label_en": "man-in-the-middle spoofing attack",
        "label_vi": "Tấn công người đứng giữa MITM qua DHCP giả mạo",
        "target_ids": [
          "q52-m-dhcp"
        ]
      }
    ],
    "explanation": "Biến thể câu hỏi trắc nghiệm kéo thả phổ biến: Đối chiếu trực tiếp 3 kiểu tấn công nhảy VLAN và giả mạo IP/DHCP với 3 biện pháp cấu hình chuẩn của Cisco."
  },
  {
    "id": 53,
    "title": "Câu 53: Phân Định Tính Năng Các Dịch Vụ AAA",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA features from the left onto the corresponding AAA security services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các tính năng AAA từ bên trái vào đúng dịch vụ Authentication, Authorization hoặc Accounting ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q53_a.png",
    "answer_image": "images/dnd/dnd_q53_b.png",
    "source_items": [
      {
        "id": "q53-f-auth1",
        "text_en": "Identifies the user",
        "text_vi": "Nhận diện danh tính người dùng"
      },
      {
        "id": "q53-f-auth2",
        "text_en": "Verifies the password associated with a user",
        "text_vi": "Xác minh mật khẩu và thông tin đăng nhập của người dùng"
      },
      {
        "id": "q53-f-autho1",
        "text_en": "Controls the actions that a user can perform",
        "text_vi": "Kiểm soát các hành động mà người dùng được phép thực thi"
      },
      {
        "id": "q53-f-autho2",
        "text_en": "Restricts the CLI commands executable by a user",
        "text_vi": "Giới hạn danh sách các lệnh CLI người dùng được gõ trên switch/router"
      },
      {
        "id": "q53-f-acc1",
        "text_en": "Records user activities and commands executed",
        "text_vi": "Ghi nhận lịch sử hoạt động và các lệnh CLI đã được thực thi"
      },
      {
        "id": "q53-f-acc2",
        "text_en": "Records the amount of network resources consumed",
        "text_vi": "Ghi nhận khối lượng tài nguyên mạng và thời gian đã sử dụng"
      }
    ],
    "drop_zones": [
      {
        "id": "q53-z-auth",
        "label_en": "Authentication",
        "label_vi": "Authentication (Xác thực danh tính)",
        "target_ids": [
          "q53-f-auth1",
          "q53-f-auth2"
        ]
      },
      {
        "id": "q53-z-autho",
        "label_en": "Authorization",
        "label_vi": "Authorization (Ủy quyền phân nhiệm)",
        "target_ids": [
          "q53-f-autho1",
          "q53-f-autho2"
        ]
      },
      {
        "id": "q53-z-acc",
        "label_en": "Accounting",
        "label_vi": "Accounting (Kiểm toán ghi chép)",
        "target_ids": [
          "q53-f-acc1",
          "q53-f-acc2"
        ]
      }
    ],
    "explanation": "Nguyên lý phân nhiệm trong AAA:\n- **Authentication**: Xác minh 'Ai đang cố truy cập?' bằng mật khẩu/chứng chỉ.\n- **Authorization**: Xác minh 'Được phép làm gì?' bằng cách giới hạn lệnh CLI.\n- **Accounting**: Xác minh 'Đã làm gì và bao lâu?' bằng cách ghi log tài nguyên."
  },
  {
    "id": 54,
    "title": "Câu 54: Đặc Trưng Của Công Cụ Tự Động Hóa Ansible",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the Ansible features from the left onto the right. Not all features are used.",
    "prompt_vi": "Kéo thả các đặc tính đúng của Ansible sang khung bên phải. Lưu ý: Không phải mọi đặc tính đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q54_a.png",
    "answer_image": "images/dnd/dnd_q54_b.png",
    "source_items": [
      {
        "id": "q54-f1",
        "text_en": "executes modules via SSH by default",
        "text_vi": "Thực thi các module qua kết nối an toàn SSH mặc định"
      },
      {
        "id": "q54-f2",
        "text_en": "uses the YAML language",
        "text_vi": "Sử dụng cú pháp định dạng ngôn ngữ YAML (Playbooks)"
      },
      {
        "id": "q54-f3",
        "text_en": "operates without agents (agentless)",
        "text_vi": "Hoạt động hoàn toàn không cần cài agent trên thiết bị đích (Agentless)"
      },
      {
        "id": "q54-dist",
        "text_en": "uses agents to manage hosts",
        "text_vi": "Bắt buộc cài agent trên máy con (Sai - Đây là của Puppet/Chef)"
      }
    ],
    "drop_zones": [
      {
        "id": "q54-z1",
        "label_en": "Ansible Feature 1",
        "label_vi": "Đặc tính đúng của Ansible 1",
        "target_ids": [
          "q54-f1"
        ]
      },
      {
        "id": "q54-z2",
        "label_en": "Ansible Feature 2",
        "label_vi": "Đặc tính đúng của Ansible 2",
        "target_ids": [
          "q54-f2"
        ]
      },
      {
        "id": "q54-z3",
        "label_en": "Ansible Feature 3",
        "label_vi": "Đặc tính đúng của Ansible 3",
        "target_ids": [
          "q54-f3"
        ]
      }
    ],
    "explanation": "Ansible nổi bật nhờ 3 đặc tính then chốt:\n1. **Agentless**: Không cần cài phần mềm agent lên switch/router.\n2. **SSH transport**: Kết nối qua SSH có sẵn trên Cisco IOS-XE.\n3. **YAML format**: Cú pháp kịch bản (Playbook) trực quan, dễ đọc."
  },
  {
    "id": 55,
    "title": "Câu 55: Đối Chiếu Thuật Ngữ AAA Với Hành Động",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA terms from the left onto the descriptions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ AAA từ bên trái vào đúng hành động thực hiện ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q55_a.png",
    "answer_image": "images/dnd/dnd_q55_b.png",
    "source_items": [
      {
        "id": "q55-accounting",
        "text_en": "accounting",
        "text_vi": "Accounting"
      },
      {
        "id": "q55-authorization",
        "text_en": "authorization",
        "text_vi": "Authorization"
      },
      {
        "id": "q55-authentication",
        "text_en": "authentication",
        "text_vi": "Authentication"
      }
    ],
    "drop_zones": [
      {
        "id": "q55-z1",
        "label_en": "tracks activity",
        "label_vi": "Theo dõi và ghi nhận hoạt động (tracks activity)",
        "target_ids": [
          "q55-accounting"
        ]
      },
      {
        "id": "q55-z2",
        "label_en": "verifies access rights",
        "label_vi": "Xác minh các quyền hạn truy cập (verifies access rights)",
        "target_ids": [
          "q55-authorization"
        ]
      },
      {
        "id": "q55-z3",
        "label_en": "verifies identity",
        "label_vi": "Xác minh danh tính người dùng (verifies identity)",
        "target_ids": [
          "q55-authentication"
        ]
      }
    ],
    "explanation": "Khắc sâu 3 từ khóa định nghĩa chuẩn Cisco:\n- **Authentication** -> `verifies identity`\n- **Authorization** -> `verifies access rights`\n- **Accounting** -> `tracks activity`"
  },
  {
    "id": 56,
    "title": "Câu 56: Điểm Truy Cập Không Dây (AP) vs Bộ Điều Khiển (WLC)",
    "category": "Network Access",
    "prompt_en": "Drag and drop the characteristics from the left onto corresponding device types on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào đúng loại thiết bị Access Point hoặc Wireless LAN Controller ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q56_a.png",
    "answer_image": "images/dnd/dnd_q56_b.png",
    "source_items": [
      {
        "id": "q56-ap-radio",
        "text_en": "transmits and receives radio signals",
        "text_vi": "Phát sóng và tiếp nhận các tín hiệu vô tuyến (Radio RF)"
      },
      {
        "id": "q56-ap-poe",
        "text_en": "requires a special adapter for POE / power injector",
        "text_vi": "Cần bộ chuyển đổi cấp nguồn PoE (hoặc injector) để hoạt động"
      },
      {
        "id": "q56-ap-wgb",
        "text_en": "configurable as a workgroup bridge",
        "text_vi": "Có thể cấu hình hoạt động ở chế độ Workgroup Bridge (WGB)"
      },
      {
        "id": "q56-wlc-qos",
        "text_en": "uses templates to implement QOS configuration",
        "text_vi": "Sử dụng các mẫu template tập trung để áp dụng cấu hình QoS"
      },
      {
        "id": "q56-wlc-conn",
        "text_en": "supplies user connection data within a device group",
        "text_vi": "Cung cấp và đồng bộ dữ liệu phiên kết nối người dùng trong nhóm thiết bị"
      }
    ],
    "drop_zones": [
      {
        "id": "q56-z-ap",
        "label_en": "Access Point (AP)",
        "label_vi": "Access Point (AP)",
        "target_ids": [
          "q56-ap-radio",
          "q56-ap-poe",
          "q56-ap-wgb"
        ]
      },
      {
        "id": "q56-z-wlc",
        "label_en": "Wireless LAN Controller (WLC)",
        "label_vi": "Wireless LAN Controller (WLC)",
        "target_ids": [
          "q56-wlc-qos",
          "q56-wlc-conn"
        ]
      }
    ],
    "explanation": "- **Access Point**: Là thiết bị vật lý phát sóng Wi-Fi (Radio RF), nhận nguồn qua dây mạng PoE (802.3af/at), có thể làm cầu nối mạng (Workgroup Bridge - WGB) cho thiết bị có dây.\n- **WLC**: Quản trị tập trung, triển khai cấu hình QoS đồng bộ qua template, điều phối roaming giữa các AP."
  },
  {
    "id": 57,
    "title": "Câu 57: So Sánh Cáp Xoắn Đôi vs Cáp Sợi Quang Đơn Mốt",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto cable type on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào đúng loại cáp xoắn đôi hoặc cáp quang đơn mốt ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q57_a.png",
    "answer_image": "images/dnd/dnd_q57_b.png",
    "source_items": [
      {
        "id": "q57-tp1",
        "text_en": "comprised of shielded and unshielded twisted pairs",
        "text_vi": "Cấu tạo gồm các cặp dây đồng xoắn đôi (STP/UTP)"
      },
      {
        "id": "q57-tp2",
        "text_en": "is affected by electrical and magnetic interference",
        "text_vi": "Bị ảnh hưởng suy hao bởi nhiễu sóng điện từ (EMI)"
      },
      {
        "id": "q57-sm1",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "Được cấu tạo từ các sợi thủy tinh silica cách điện"
      },
      {
        "id": "q57-sm2",
        "text_en": "uses a single wavelength of light",
        "text_vi": "Sử dụng một bước sóng ánh sáng laser duy nhất"
      }
    ],
    "drop_zones": [
      {
        "id": "q57-twisted",
        "label_en": "Twisted-Pair Cabling",
        "label_vi": "Cáp Xoắn Đôi (Twisted-Pair)",
        "target_ids": [
          "q57-tp1",
          "q57-tp2"
        ]
      },
      {
        "id": "q57-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Cáp Quang Đơn Mốt (Single-Mode Fiber)",
        "target_ids": [
          "q57-sm1",
          "q57-sm2"
        ]
      }
    ],
    "explanation": "Củng cố kiến thức thi CCNA: Cáp xoắn đôi mang tín hiệu điện nên chịu ảnh hưởng bởi điện từ trường EMI. Cáp quang đơn mốt (SMF) làm bằng thủy tinh và truyền ánh sáng laser đơn bước sóng."
  },
  {
    "id": 58,
    "title": "Câu 58: Ưu Điểm Của Giao Thức Tầng Transport: TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop protocol advantages from the left onto the protocol types on the right. Not all advantages are used.",
    "prompt_vi": "Kéo thả các ưu thế của giao thức từ bên trái vào loại giao thức TCP hoặc UDP tương ứng ở bên phải. Chú ý: Không phải mọi ưu thế đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q58_a.png",
    "answer_image": "images/dnd/dnd_q58_b.png",
    "source_items": [
      {
        "id": "q58-t1",
        "text_en": "optimizes transmission rates to receiver",
        "text_vi": "Tự động tối ưu hóa tốc độ truyền phù hợp với máy nhận (Flow Control)"
      },
      {
        "id": "q58-t2",
        "text_en": "controls connections between sender and receiver",
        "text_vi": "Kiểm soát chặt chẽ trạng thái kết nối giữa bên gửi và bên nhận"
      },
      {
        "id": "q58-t3",
        "text_en": "guarantees packet delivery",
        "text_vi": "Đảm bảo gói tin được chuyển đến đích nguyên vẹn và đầy đủ"
      },
      {
        "id": "q58-u1",
        "text_en": "capable of sending multicast transmissions",
        "text_vi": "Có khả năng truyền phát gói tin dạng Multicast"
      },
      {
        "id": "q58-u2",
        "text_en": "transmits live and real-time data",
        "text_vi": "Truyền dữ liệu thoại/video trực tiếp theo thời gian thực"
      },
      {
        "id": "q58-dist",
        "text_en": "uses stateful packet inspection",
        "text_vi": "Sử dụng kiểm tra gói tin trạng thái (Đây là chức năng của Tường lửa - Không dùng)"
      }
    ],
    "drop_zones": [
      {
        "id": "q58-tcp",
        "label_en": "TCP",
        "label_vi": "Giao thức TCP",
        "target_ids": [
          "q58-t1",
          "q58-t2",
          "q58-t3"
        ]
      },
      {
        "id": "q58-udp",
        "label_en": "UDP",
        "label_vi": "Giao thức UDP",
        "target_ids": [
          "q58-u1",
          "q58-u2"
        ]
      }
    ],
    "explanation": "- **TCP**: Tối ưu tốc độ máy nhận (Sliding Window / Flow Control), quản lý phiên kết nối, bảo đảm giao nhận tin cậy (ACK).\n- **UDP**: Hỗ trợ gửi Multicast (truyền cho nhiều máy cùng lúc) và dữ liệu thời gian thực (Real-time data).\n- *Stateful packet inspection* là đặc tính của Tường lửa (Firewall), không thuộc về tầng Transport."
  },
  {
    "id": 59,
    "title": "Câu 59: Đối Chiếu Mô Tả Tính Năng An Ninh Xác Thực",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the descriptions of security features from the left onto the corresponding features on the right.",
    "prompt_vi": "Kéo thả các mô tả từ bên trái vào đúng tính năng an ninh xác thực ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q59_a.png",
    "answer_image": "images/dnd/dnd_q59_b.png",
    "source_items": [
      {
        "id": "q59-bio",
        "text_en": "may use a fingerprint reader to authenticate users",
        "text_vi": "Sử dụng đầu đọc vân tay hoặc quét sinh học để nhận diện người dùng"
      },
      {
        "id": "q59-mfa",
        "text_en": "requires two or more authentication methods to verify a user's identity",
        "text_vi": "Bắt buộc kết hợp từ hai phương thức xác thực trở lên để kiểm tra danh tính"
      },
      {
        "id": "q59-cert",
        "text_en": "supports enterprise, third party, and public options",
        "text_vi": "Hỗ trợ chứng chỉ số từ doanh nghiệp nội bộ hoặc từ nhà cung cấp công cộng"
      }
    ],
    "drop_zones": [
      {
        "id": "q59-z-bio",
        "label_en": "Biometrics",
        "label_vi": "Sinh trắc học (Biometrics)",
        "target_ids": [
          "q59-bio"
        ]
      },
      {
        "id": "q59-z-mfa",
        "label_en": "Multifactor Authentication (MFA)",
        "label_vi": "Xác thực đa yếu tố (MFA)",
        "target_ids": [
          "q59-mfa"
        ]
      },
      {
        "id": "q59-z-cert",
        "label_en": "Certificates",
        "label_vi": "Chứng chỉ số (Certificates / PKI)",
        "target_ids": [
          "q59-cert"
        ]
      }
    ],
    "explanation": "- **Biometrics**: Vân tay, nhận diện mống mắt/khuôn mặt (Something you are).\n- **Multifactor Authentication (MFA)**: Bắt buộc tối thiểu 2 yếu tố độc lập để đăng nhập.\n- **Certificates**: Chứng chỉ số X.509 ký bởi CA (Private CA hoặc Public CA)."
  }
];
