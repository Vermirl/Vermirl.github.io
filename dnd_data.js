// CCNA 200-301 Drag and Drop Questions Dataset (59 Questions)
// Generated for Vermirl CCNA Practice Platform

window.CCNA_DND_DATA = [
  {
    "id": 1,
    "title": "Câu 01: Đối Chiếu Tiền Tố Bảng Định Tuyến OSPF",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the subnet masks from the left onto the corresponding subnets on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các Subnet Mask từ bên trái vào đúng các mạng (subnet) tương ứng ở bên phải theo bảng định tuyến.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q01_a.png",
    "question_image": "images/dnd/dnd_q01_b.png",
    "answer_image": "images/dnd/dnd_q01_c.png",
    "source_items": [
      {
        "id": "q1-m21",
        "text_en": "255.255.248.0",
        "text_vi": "255.255.248.0"
      },
      {
        "id": "q1-m25",
        "text_en": "255.255.255.128",
        "text_vi": "255.255.255.128"
      },
      {
        "id": "q1-m27",
        "text_en": "255.255.255.224",
        "text_vi": "255.255.255.224"
      },
      {
        "id": "q1-m28",
        "text_en": "255.255.255.240",
        "text_vi": "255.255.255.240"
      },
      {
        "id": "q1-m29",
        "text_en": "255.255.255.248",
        "text_vi": "255.255.255.248"
      },
      {
        "id": "q1-m30",
        "text_en": "255.255.255.252",
        "text_vi": "255.255.255.252"
      }
    ],
    "drop_zones": [
      {
        "id": "q1-z1",
        "label_en": "10.10.13.0",
        "label_vi": "10.10.13.0",
        "target_ids": [
          "q1-m25"
        ]
      },
      {
        "id": "q1-z2",
        "label_en": "10.10.13.128",
        "label_vi": "10.10.13.128",
        "target_ids": [
          "q1-m28"
        ]
      },
      {
        "id": "q1-z3",
        "label_en": "10.10.13.160",
        "label_vi": "10.10.13.160",
        "target_ids": [
          "q1-m29"
        ]
      },
      {
        "id": "q1-z4",
        "label_en": "10.10.13.252",
        "label_vi": "10.10.13.252",
        "target_ids": [
          "q1-m30"
        ]
      }
    ],
    "explanation": "Quy tắc tra cứu từ Bảng định tuyến (show ip route) sang Subnet Mask tương ứng:\n- Mạng **10.10.13.0**: Trong bảng định tuyến là `10.10.13.0/25` -> Prefix length /25 tương ứng Subnet Mask **255.255.255.128**.\n- Mạng **10.10.13.128**: Trong bảng định tuyến là `10.10.13.128/28` -> Prefix length /28 tương ứng Subnet Mask **255.255.255.240**.\n- Mạng **10.10.13.160**: Trong bảng định tuyến là `10.10.13.160/29` -> Prefix length /29 tương ứng Subnet Mask **255.255.255.248**.\n- Mạng **10.10.13.252**: Trong bảng định tuyến là `10.10.13.252/30` -> Prefix length /30 tương ứng Subnet Mask **255.255.255.252**.\n*Lưu ý:* Hai giá trị `255.255.248.0` (/21) và `255.255.255.224` (/27) là các đáp án mồi nhử (distractors), không được sử dụng."
  },
  {
    "id": 2,
    "title": "Câu 02: So Sánh Công Cụ Quản Lý Cấu Hình (Ansible Features)",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the features that apply to Ansible from the left onto the right. Not all features are used.",
    "prompt_vi": "Kéo thả các đặc tính thuộc về công cụ Ansible từ bên trái sang khung bên phải. Không phải tất cả đặc tính đều được dùng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q02_a.png",
    "answer_image": "images/dnd/dnd_q02_b.png",
    "source_items": [
      {
        "id": "q2-s1",
        "text_en": "executes modules via SSH by default",
        "text_vi": "executes modules via SSH by default"
      },
      {
        "id": "q2-s2",
        "text_en": "uses the YAML language",
        "text_vi": "uses the YAML language"
      },
      {
        "id": "q2-s3",
        "text_en": "pushes configurations to the client",
        "text_vi": "pushes configurations to the client"
      },
      {
        "id": "q2-s4",
        "text_en": "operates without agents",
        "text_vi": "operates without agents"
      },
      {
        "id": "q2-s5",
        "text_en": "uses agents to manage hosts",
        "text_vi": "uses agents to manage hosts"
      },
      {
        "id": "q2-s6",
        "text_en": "requires clients to pull configurations from the server",
        "text_vi": "requires clients to pull configurations from the server"
      }
    ],
    "drop_zones": [
      {
        "id": "q2-ansible",
        "label_en": "Ansible Features",
        "label_vi": "Ansible Features",
        "target_ids": [
          "q2-s1",
          "q2-s2",
          "q2-s3",
          "q2-s4"
        ]
      }
    ],
    "explanation": "Đặc trưng kiến trúc của **Ansible**:\n1. **Agentless**: Hoạt động không cần cài agent trên thiết bị đích (operates without agents).\n2. **Giao thức SSH**: Mặc định kết nối và thực thi qua SSH (executes modules via SSH by default).\n3. **Mô hình Push**: Server chủ động đẩy cấu hình xuống client (pushes configurations to the client).\n4. **Ngôn ngữ YAML**: Viết Playbooks bằng YAML (uses the YAML language).\n*Lưu ý:* Hai mục còn lại ('uses agents...' và 'requires clients to pull...') là đặc tính mô hình Pull của Puppet và Chef, đóng vai trò mồi nhử."
  },
  {
    "id": 3,
    "title": "Câu 03: Thành Phần Bảng Định Tuyến (Routing Table Components)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the routing components from the left onto the corresponding categories on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các giá trị thành phần bảng định tuyến từ bên trái vào đúng danh mục ở bên phải theo dòng định tuyến trong exhibit.",
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
        "label_vi": "Subnet Prefix",
        "target_ids": [
          "q3-p29"
        ]
      },
      {
        "id": "q3-z2",
        "label_en": "Administrative Distance",
        "label_vi": "Administrative Distance",
        "target_ids": [
          "q3-ad90"
        ]
      },
      {
        "id": "q3-z3",
        "label_en": "Metric / Cost",
        "label_vi": "Metric / Cost",
        "target_ids": [
          "q3-c40"
        ]
      }
    ],
    "explanation": "Trong sơ đồ lệnh `show ip route` của đề thi:\n- Dòng định tuyến hiển thị prefix `/29`.\n- Giá trị Administrative Distance (AD) trong ngoặc vuông [AD/Metric] hiển thị `90`.\n- Giá trị Metric/Cost hiển thị `40`.\n*Ghi chú:* AD = 90 là giá trị mặc định của định tuyến nội miền EIGRP."
  },
  {
    "id": 4,
    "title": "Câu 04: Mạng Điều Khiển Tập Trung (SDN) vs Mạng Truyền Thống",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the network characteristics from the left onto the corresponding networking types on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc trưng từ bên trái vào đúng loại kiến trúc mạng (Controller-Based hoặc Traditional) ở bên phải. Không phải tất cả đặc trưng đều được dùng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q04_a.png",
    "answer_image": "images/dnd/dnd_q04_b.png",
    "source_items": [
      {
        "id": "q4-c1",
        "text_en": "This type deploys a consistent configuration across multiple devices.",
        "text_vi": "This type deploys a consistent configuration across multiple devices."
      },
      {
        "id": "q4-t2",
        "text_en": "A distributed control plane is needed.",
        "text_vi": "A distributed control plane is needed."
      },
      {
        "id": "q4-t1",
        "text_en": "This type requires a distributed management plane.",
        "text_vi": "This type requires a distributed management plane."
      },
      {
        "id": "q4-c2",
        "text_en": "Southbound APIs are used to apply configurations.",
        "text_vi": "Southbound APIs are used to apply configurations."
      },
      {
        "id": "q4-dist",
        "text_en": "Northbound APIs interact with end devices.",
        "text_vi": "Northbound APIs interact with end devices."
      }
    ],
    "drop_zones": [
      {
        "id": "q4-controller",
        "label_en": "Controller-Based Networking",
        "label_vi": "Controller-Based Networking",
        "target_ids": [
          "q4-c1",
          "q4-c2"
        ]
      },
      {
        "id": "q4-traditional",
        "label_en": "Traditional Networking",
        "label_vi": "Traditional Networking",
        "target_ids": [
          "q4-t1",
          "q4-t2"
        ]
      }
    ],
    "explanation": "So sánh kiến trúc mạng Controller-Based (SDN) và Traditional (Truyền thống):\n- **Controller-Based Networking**:\n  + Cấu hình nhất quán đồng bộ trên nhiều thiết bị: *This type deploys a consistent configuration across multiple devices.*\n  + Dùng các giao diện lập trình hướng Nam (Southbound APIs - như OpenFlow, NETCONF, RESTCONF) để đẩy cấu hình xuống thiết bị mạng: *Southbound APIs are used to apply configurations.*\n- **Traditional Networking**:\n  + Yêu cầu mặt phẳng quản lý phân tán (cấu hình từng thiết bị riêng lẻ qua CLI/Console): *This type requires a distributed management plane.*\n  + Mỗi thiết bị tự chạy thuật toán định tuyến độc lập (mặt phẳng điều khiển phân tán): *A distributed control plane is needed.*\n- **Mồi nhử không dùng (Distractor)**: *Northbound APIs interact with end devices.* (Sai vì Northbound API giao tiếp giữa SDN Controller và các ứng dụng quản lý/kinh doanh, không tương tác trực tiếp với end devices)."
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
        "text_vi": "supplies conduit for POE implementations"
      },
      {
        "id": "q5-cu2",
        "text_en": "is easy to tap into and obtain secure information",
        "text_vi": "is easy to tap into and obtain secure information"
      },
      {
        "id": "q5-sm1",
        "text_en": "has a core diameter of 9 microns",
        "text_vi": "has a core diameter of 9 microns"
      },
      {
        "id": "q5-sm2",
        "text_en": "used for DWDM optics",
        "text_vi": "used for DWDM optics"
      }
    ],
    "drop_zones": [
      {
        "id": "q5-copper",
        "label_en": "Copper Cabling",
        "label_vi": "Copper Cabling",
        "target_ids": [
          "q5-cu1",
          "q5-cu2"
        ]
      },
      {
        "id": "q5-smf",
        "label_en": "Single-Mode Fiber (SMF)",
        "label_vi": "Single-Mode Fiber (SMF)",
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
    "prompt_en": "Drag and drop the protocol characteristics from the left onto the corresponding protocols on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính giao thức từ bên trái vào đúng giao thức tương ứng (TCP hoặc UDP) ở bên phải. Không phải tất cả đặc tính đều được dùng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q06_a.png",
    "answer_image": "images/dnd/dnd_q06_b.png",
    "source_items": [
      {
        "id": "q6-t1",
        "text_en": "optimizes transmission rates to receiver",
        "text_vi": "optimizes transmission rates to receiver"
      },
      {
        "id": "q6-dist",
        "text_en": "uses stateful packet inspection",
        "text_vi": "uses stateful packet inspection"
      },
      {
        "id": "q6-t2",
        "text_en": "controls connections between sender and receiver",
        "text_vi": "controls connections between sender and receiver"
      },
      {
        "id": "q6-u1",
        "text_en": "capable of sending multicast transmissions",
        "text_vi": "capable of sending multicast transmissions"
      },
      {
        "id": "q6-t3",
        "text_en": "guarantees packet delivery",
        "text_vi": "guarantees packet delivery"
      },
      {
        "id": "q6-u2",
        "text_en": "transmits live and real-time data",
        "text_vi": "transmits live and real-time data"
      },
      {
        "id": "q6-u3",
        "text_en": "reduces end-to-end delays using smaller packets",
        "text_vi": "reduces end-to-end delays using smaller packets"
      }
    ],
    "drop_zones": [
      {
        "id": "q6-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q6-t1",
          "q6-t2",
          "q6-t3"
        ]
      },
      {
        "id": "q6-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
        "target_ids": [
          "q6-u1",
          "q6-u2",
          "q6-u3"
        ]
      }
    ],
    "explanation": "Phân loại đặc tính giao thức tầng Transport (L4):\n- **TCP (Transmission Control Protocol)**:\n  + Tối ưu tốc độ truyền đến máy nhận qua cơ chế Flow Control / Windowing: *optimizes transmission rates to receiver*.\n  + Kiểm soát và duy trì kết nối giữa bên gửi và bên nhận: *controls connections between sender and receiver*.\n  + Đảm bảo việc truyền nhận dữ liệu tin cậy qua số thứ tự và ACK: *guarantees packet delivery*.\n- **UDP (User Datagram Protocol)**:\n  + Có khả năng gửi gói tin Multicast và Broadcast: *capable of sending multicast transmissions*.\n  + Phù hợp cho truyền dữ liệu thời gian thực (VoIP, Video): *transmits live and real-time data*.\n  + Giảm độ trễ đầu cuối bằng cách dùng các gói nhỏ không tốn cước tiêu đề: *reduces end-to-end delays using smaller packets*.\n- **Mồi nhử không dùng (Distractor)**: *uses stateful packet inspection* (Đây là tính năng kiểm tra trạng thái gói tin của tường lửa - Firewall tại Layer 4/Layer 7, không phải đặc tính giao thức của TCP/UDP)."
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
        "text_vi": "provides one-to-many communications"
      },
      {
        "id": "q7-m2",
        "text_en": "sends packets to a group address rather than a single address",
        "text_vi": "sends packets to a group address rather than a single address"
      },
      {
        "id": "q7-l1",
        "text_en": "serves as the routing next-hop in an IGP",
        "text_vi": "serves as the routing next-hop in an IGP"
      },
      {
        "id": "q7-l2",
        "text_en": "confined to a single link",
        "text_vi": "confined to a single link"
      }
    ],
    "drop_zones": [
      {
        "id": "q7-multicast",
        "label_en": "Multicast Address",
        "label_vi": "Multicast Address",
        "target_ids": [
          "q7-m1",
          "q7-m2"
        ]
      },
      {
        "id": "q7-linklocal",
        "label_en": "Link-Local Address",
        "label_vi": "Link-Local Address",
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
    "prompt_en": "Refer to the exhibit. OSPF is running between site A and site B. Drag and drop the destination IPs from the left onto the network segments used to reach the destination on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Mạng đang chạy OSPF giữa Site A và Site B. Kéo thả các địa chỉ IP đích từ bên trái vào đúng phân đoạn mạng / đích đến ở bên phải.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q08_exhibit.png",
    "question_image": "images/dnd/dnd_q08_a.png",
    "answer_image": "images/dnd/dnd_q08_b.png",
    "source_items": [
      {
        "id": "q8-ip1",
        "text_en": "10.10.10.16"
      },
      {
        "id": "q8-ip2",
        "text_en": "10.10.13.1"
      },
      {
        "id": "q8-ip3",
        "text_en": "10.10.13.129"
      },
      {
        "id": "q8-ip4",
        "text_en": "10.10.13.150"
      },
      {
        "id": "q8-ip5",
        "text_en": "10.10.100.128"
      }
    ],
    "drop_zones": [
      {
        "id": "q8-z-internet",
        "label_en": "Internet",
        "target_ids": [
          "q8-ip1",
          "q8-ip3",
          "q8-ip5"
        ]
      },
      {
        "id": "q8-z-router1",
        "label_en": "Router1",
        "target_ids": [
          "q8-ip2",
          "q8-ip4"
        ]
      }
    ],
    "explanation": "<strong>Giải thích nguyên lý định tuyến Longest Prefix Match & Default Route:</strong><ul><li><strong>Đích đến Router1 (Site A qua các cổng FastEthernet0/1, Fa0/2, Fa0/3):</strong><ul><li><code>10.10.13.1</code>: Khớp với tuyến OSPF <code>10.10.13.0/25</code> (dải IP khả dụng: <code>10.10.13.1 - 10.10.13.126</code>), đi qua Router1.</li><li><code>10.10.13.150</code>: Khớp với tuyến OSPF <code>10.10.13.144/28</code> (dải IP khả dụng: <code>10.10.13.145 - 10.10.13.158</code>), đi qua Router1.</li></ul></li><li><strong>Đích đến Internet (qua Default Route trên Router2):</strong><ul><li><code>10.10.10.16</code>: Không khớp bất kỳ subnet trực tiếp hay tuyến OSPF cụ thể nào trên Router2 &rarr; Chuyển tiếp theo tuyến mặc định <code>0.0.0.0/0</code> qua cổng Fa0/4 ra <strong>Internet</strong>.</li><li><code>10.10.13.129</code>: Nằm ngoài dải <code>/25</code> (kết thúc ở .126) và ngoài dải <code>/28</code> (từ .144 trở lên) &rarr; Không khớp route nào &rarr; Theo Default Route ra <strong>Internet</strong>.</li><li><code>10.10.100.128</code>: Không có route trong bảng định tuyến &rarr; Theo Default Route ra <strong>Internet</strong>.</li></ul></li></ul>"
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
        "text_vi": "on-demand self-service"
      },
      {
        "id": "q9-measured",
        "text_en": "measured service",
        "text_vi": "measured service"
      },
      {
        "id": "q9-pooling",
        "text_en": "resource pooling",
        "text_vi": "resource pooling"
      },
      {
        "id": "q9-elasticity",
        "text_en": "rapid elasticity",
        "text_vi": "rapid elasticity"
      },
      {
        "id": "q9-network",
        "text_en": "broad network access",
        "text_vi": "broad network access"
      }
    ],
    "drop_zones": [
      {
        "id": "q9-z1",
        "label_en": "The consumer can choose when to start or stop using the service.",
        "label_vi": "The consumer can choose when to start or stop using the service.",
        "target_ids": [
          "q9-ondemand"
        ]
      },
      {
        "id": "q9-z2",
        "label_en": "The provider can bill the consumer in accordance with the level of usage.",
        "label_vi": "The provider can bill the consumer in accordance with the level of usage.",
        "target_ids": [
          "q9-measured"
        ]
      },
      {
        "id": "q9-z3",
        "label_en": "The provider allocates CPU, memory, and disk from its shared compute resources to multiple customers.",
        "label_vi": "The provider allocates CPU, memory, and disk from its shared compute resources to multiple customers.",
        "target_ids": [
          "q9-pooling"
        ]
      },
      {
        "id": "q9-z4",
        "label_en": "The resource pool can expand quickly to meet demand.",
        "label_vi": "The resource pool can expand quickly to meet demand.",
        "target_ids": [
          "q9-elasticity"
        ]
      },
      {
        "id": "q9-z5",
        "label_en": "The service is available from many types of devices and networks.",
        "label_vi": "The service is available from many types of devices and networks.",
        "target_ids": [
          "q9-network"
        ]
      }
    ],
    "explanation": "5 đặc tính cốt lõi của Cloud Computing theo viện tiêu chuẩn NIST Hoa Kỳ (NIST SP 800-145):\n1. **On-demand self-service**: Khách tự mua, bật/tắt dịch vụ qua web portal.\n2. **Broad network access**: Truy cập qua Internet từ bất cứ đâu, đa thiết bị.\n3. **Resource pooling**: Chia sẻ kho tài nguyên vật lý chung cho nhiều khách hàng.\n4. **Rapid elasticity**: Co giãn tức thì theo tải (scale in / scale out).\n5. **Measured service**: Dùng bao nhiêu trả bấy nhiêu (Pay-as-you-go)."
  },
  {
    "id": 10,
    "title": "Câu 10: Đặc Tính Cáp Đồng vs Cáp Quang Đa Mốt",
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
        "text_vi": "transmits data in the form of electronic signals"
      },
      {
        "id": "q10-cu2",
        "text_en": "supplies conduit for POE implementations",
        "text_vi": "supplies conduit for POE implementations"
      },
      {
        "id": "q10-fo1",
        "text_en": "used for high-throughput over short distances",
        "text_vi": "used for high-throughput over short distances"
      },
      {
        "id": "q10-fo2",
        "text_en": "transmits signals using pulses of light",
        "text_vi": "transmits signals using pulses of light"
      }
    ],
    "drop_zones": [
      {
        "id": "q10-copper",
        "label_en": "Copper Cabling",
        "label_vi": "Copper Cabling",
        "target_ids": [
          "q10-cu1",
          "q10-cu2"
        ]
      },
      {
        "id": "q10-fiber",
        "label_en": "Multi-Mode Fiber",
        "label_vi": "Multi-Mode Fiber",
        "target_ids": [
          "q10-fo1",
          "q10-fo2"
        ]
      }
    ],
    "explanation": "- **Copper Cabling (Cáp đồng)**: Dẫn điện, truyền xung điện áp (electronic signals), có thể mang nguồn điện một chiều cho thiết bị PoE (802.3af/at/bt).\n- **Multi-Mode Fiber (Cáp quang đa mốt)**: Lõi thủy tinh/nhựa, truyền bằng xung ánh sáng (pulses of light), dùng cho băng thông cao ở khoảng cách ngắn (short distances < 500m) do hiện tượng tán sắc đa mốt."
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
        "text_vi": "client confirms data delivery from the server"
      },
      {
        "id": "q11-t2",
        "text_en": "checks for errors and guarantees reception",
        "text_vi": "checks for errors and guarantees reception"
      },
      {
        "id": "q11-t3",
        "text_en": "delays data transmission if congestion is detected",
        "text_vi": "delays data transmission if congestion is detected"
      },
      {
        "id": "q11-u1",
        "text_en": "able to send data without requiring an established connection beforehand",
        "text_vi": "able to send data without requiring an established connection beforehand"
      },
      {
        "id": "q11-u2",
        "text_en": "supports broadcast and multicast traffic",
        "text_vi": "supports broadcast and multicast traffic"
      },
      {
        "id": "q11-u3",
        "text_en": "packets sent independently and received in no fixed order",
        "text_vi": "packets sent independently and received in no fixed order"
      }
    ],
    "drop_zones": [
      {
        "id": "q11-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q11-t1",
          "q11-t2",
          "q11-t3"
        ]
      },
      {
        "id": "q11-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
        "target_ids": [
          "q11-u1",
          "q11-u2",
          "q11-u3"
        ]
      }
    ],
    "explanation": "Đặc trưng chuyên sâu:\n- **TCP**: Phía nhận gửi xác nhận ACK (client confirms data delivery), kiểm soát lỗi và cam kết toàn vẹn (guarantees reception), giảm tốc độ khi mạng nghẽn (delays transmission if congestion detected).\n- **UDP**: Gửi trực tiếp không cần bắt tay (no established connection beforehand), hỗ trợ Broadcast/Multicast, các gói tin độc lập không cần theo thứ tự cố định (no fixed order)."
  },
  {
    "id": 12,
    "title": "Câu 12: Cấu Hình Địa Chỉ IP Khả Dụng (DC-1 & HQ-1)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. The IP address configurations must be completed on the DC-1 and HQ-1 routers based on these requirements:\n- DC-1 Gi1/0 must be the last usable address on a /30\n- DC-1 Gi1/1 must be the first usable address on a /29\n- DC-1 Gi1/2 must be the last usable address on a /28\n- HQ-1 Gi1/3 must be the last usable address on a /29\nDrag and drop the commands from the left onto the destination interfaces on the right. Not all commands are used.",
    "prompt_vi": "Tham chiếu sơ đồ. Cấu hình địa chỉ IP phải được hoàn thành trên router DC-1 và HQ-1 dựa trên các yêu cầu sau:\n- DC-1 Gi1/0 phải là địa chỉ khả dụng cuối cùng trên mạng /30\n- DC-1 Gi1/1 phải là địa chỉ khả dụng đầu tiên trên mạng /29\n- DC-1 Gi1/2 phải là địa chỉ khả dụng cuối cùng trên mạng /28\n- HQ-1 Gi1/3 phải là địa chỉ khả dụng cuối cùng trên mạng /29\nKéo thả các lệnh từ bên trái vào đúng các cổng tương ứng ở bên phải. Không phải tất cả các lệnh đều được dùng.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q12_a.png",
    "question_image": "images/dnd/dnd_q12_b.png",
    "answer_image": "images/dnd/dnd_q12_c.png",
    "source_items": [
      {
        "id": "q12-c1",
        "text_en": "ip address 192.168.4.9 255.255.255.248",
        "text_vi": "ip address 192.168.4.9 255.255.255.248"
      },
      {
        "id": "q12-c2",
        "text_en": "ip address 192.168.3.14 255.255.255.240",
        "text_vi": "ip address 192.168.3.14 255.255.255.240"
      },
      {
        "id": "q12-d1",
        "text_en": "ip address 209.165.202.129 255.255.255.252",
        "text_vi": "ip address 209.165.202.129 255.255.255.252"
      },
      {
        "id": "q12-d2",
        "text_en": "ip address 192.168.4.13 255.255.255.240",
        "text_vi": "ip address 192.168.4.13 255.255.255.240"
      },
      {
        "id": "q12-c3",
        "text_en": "ip address 209.165.202.130 255.255.255.252",
        "text_vi": "ip address 209.165.202.130 255.255.255.252"
      },
      {
        "id": "q12-d3",
        "text_en": "ip address 209.165.202.131 255.255.255.252",
        "text_vi": "ip address 209.165.202.131 255.255.255.252"
      },
      {
        "id": "q12-c4",
        "text_en": "ip address 192.168.3.14 255.255.255.248",
        "text_vi": "ip address 192.168.3.14 255.255.255.248"
      }
    ],
    "drop_zones": [
      {
        "id": "q12-dc-gi10",
        "label_en": "DC-1 Gi1/0",
        "label_vi": "DC-1 Gi1/0",
        "target_ids": [
          "q12-c3"
        ]
      },
      {
        "id": "q12-dc-gi11",
        "label_en": "DC-1 Gi1/1",
        "label_vi": "DC-1 Gi1/1",
        "target_ids": [
          "q12-c1"
        ]
      },
      {
        "id": "q12-dc-gi12",
        "label_en": "DC-1 Gi1/2",
        "label_vi": "DC-1 Gi1/2",
        "target_ids": [
          "q12-c2"
        ]
      },
      {
        "id": "q12-hq-gi13",
        "label_en": "HQ-1 Gi1/3",
        "label_vi": "HQ-1 Gi1/3",
        "target_ids": [
          "q12-c4"
        ]
      }
    ],
    "explanation": "Tính toán Subnetting chi tiết theo từng yêu cầu của bài thi:\n\n1. **DC-1 Gi1/0 (last usable on /30)**:\n   - Mạng `/30` tương ứng Subnet Mask `255.255.255.252`.\n   - Dải `209.165.202.128/30`: Network = `.128`, First usable = `.129`, **Last usable = .130**, Broadcast = `.131`.\n   -> Chọn: **`ip address 209.165.202.130 255.255.255.252`**.\n\n2. **DC-1 Gi1/1 (first usable on /29)**:\n   - Mạng `/29` tương ứng Subnet Mask `255.255.255.248` (bước nhảy 8).\n   - Dải `192.168.4.8/29`: Network = `.8`, **First usable = .9**, Last usable = `.14`, Broadcast = `.15`.\n   -> Chọn: **`ip address 192.168.4.9 255.255.255.248`**.\n\n3. **DC-1 Gi1/2 (last usable on /28)**:\n   - Mạng `/28` tương ứng Subnet Mask `255.255.255.240` (bước nhảy 16).\n   - Dải `192.168.3.0/28`: Network = `.0`, First usable = `.1`, **Last usable = .14**, Broadcast = `.15`.\n   -> Chọn: **`ip address 192.168.3.14 255.255.255.240`**.\n\n4. **HQ-1 Gi1/3 (last usable on /29)**:\n   - Mạng `/29` tương ứng Subnet Mask `255.255.255.248` (bước nhảy 8).\n   - Dải `192.168.3.8/29`: Network = `.8`, First usable = `.9`, **Last usable = .14**, Broadcast = `.15`.\n   -> Chọn: **`ip address 192.168.3.14 255.255.255.248`**.\n\n*Điểm gài bẫy (Trick) của Cisco*: Cả `DC-1 Gi1/2` và `HQ-1 Gi1/3` đều có cùng địa chỉ IP kết thúc là `.14` (`192.168.3.14`), nhưng khác nhau hoàn toàn ở Subnet Mask (`255.255.255.240` cho /28 và `255.255.255.248` cho /29)."
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
        "text_vi": "policing"
      },
      {
        "id": "q13-marking",
        "text_en": "marking",
        "text_vi": "marking"
      },
      {
        "id": "q13-queuing",
        "text_en": "queuing",
        "text_vi": "queuing"
      },
      {
        "id": "q13-class",
        "text_en": "classification",
        "text_vi": "classification"
      }
    ],
    "drop_zones": [
      {
        "id": "q13-z1",
        "label_en": "Applies a specific action (e.g. drop) whenever the maximum rate is exceeded",
        "label_vi": "Applies a specific action (e.g. drop) whenever the maximum rate is exceeded",
        "target_ids": [
          "q13-policing"
        ]
      },
      {
        "id": "q13-z2",
        "label_en": "Sets a value in the header to associate a packet with a QoS group",
        "label_vi": "Sets a value in the header to associate a packet with a QoS group",
        "target_ids": [
          "q13-marking"
        ]
      },
      {
        "id": "q13-z3",
        "label_en": "Reduces congestion by holding packets in buffers and distributing them when bandwidth allows",
        "label_vi": "Reduces congestion by holding packets in buffers and distributing them when bandwidth allows",
        "target_ids": [
          "q13-queuing"
        ]
      },
      {
        "id": "q13-z4",
        "label_en": "The overall process of using specific criteria to differentiate traffic into categories",
        "label_vi": "The overall process of using specific criteria to differentiate traffic into categories",
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
        "text_vi": "Static access"
      },
      {
        "id": "q14-dyn",
        "text_en": "Dynamic access",
        "text_vi": "Dynamic access"
      },
      {
        "id": "q14-trunk",
        "text_en": "trunk",
        "text_vi": "trunk"
      },
      {
        "id": "q14-tunnel",
        "text_en": "tunnel",
        "text_vi": "tunnel"
      },
      {
        "id": "q14-pvlan",
        "text_en": "private VLAN",
        "text_vi": "private VLAN"
      }
    ],
    "drop_zones": [
      {
        "id": "q14-z1",
        "label_en": "Allows the port to belong to one VLAN when manually configured",
        "label_vi": "Allows the port to belong to one VLAN when manually configured",
        "target_ids": [
          "q14-static"
        ]
      },
      {
        "id": "q14-z2",
        "label_en": "Allows the port to belong to one VLAN determined dynamically",
        "label_vi": "Allows the port to belong to one VLAN determined dynamically",
        "target_ids": [
          "q14-dyn"
        ]
      },
      {
        "id": "q14-z3",
        "label_en": "Allows the port to carry traffic for one or more VLANs",
        "label_vi": "Allows the port to carry traffic for one or more VLANs",
        "target_ids": [
          "q14-trunk"
        ]
      },
      {
        "id": "q14-z4",
        "label_en": "Allows the switch to support a single service provider QinQ tunnel",
        "label_vi": "Allows the switch to support a single service provider QinQ tunnel",
        "target_ids": [
          "q14-tunnel"
        ]
      },
      {
        "id": "q14-z5",
        "label_en": "Allows the port to communicate with others within the same community VLAN",
        "label_vi": "Allows the port to communicate with others within the same community VLAN",
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
        "text_vi": "publicly routable in the same way as standard host traffic"
      },
      {
        "id": "q15-u2",
        "text_en": "routable and reachable over the Internet",
        "text_vi": "routable and reachable over the Internet"
      },
      {
        "id": "q15-m1",
        "text_en": "provides one-to-many communications",
        "text_vi": "provides one-to-many communications"
      },
      {
        "id": "q15-m2",
        "text_en": "has a unicast source sent to a group address",
        "text_vi": "has a unicast source sent to a group address"
      }
    ],
    "drop_zones": [
      {
        "id": "q15-unicast",
        "label_en": "Unicast IP Address",
        "label_vi": "Unicast IP Address",
        "target_ids": [
          "q15-u1",
          "q15-u2"
        ]
      },
      {
        "id": "q15-multicast",
        "label_en": "Multicast IP Address",
        "label_vi": "Multicast IP Address",
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
    "title": "Câu 16: Phân Loại Đặc Tính Cáp Đồng vs Cáp Quang Đa Mốt (Multimode Fiber)",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the cabling characteristics from the left onto the correct cable types on the right.",
    "prompt_vi": "Kéo thả các đặc tính cáp từ bên trái vào đúng loại cáp (đồng hoặc cáp quang đa mốt) ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q16_a.png",
    "answer_image": "images/dnd/dnd_q16_b.png",
    "source_items": [
      {
        "id": "q16-cu1",
        "text_en": "is comprised of shielded and unshielded twisted pairs",
        "text_vi": "is comprised of shielded and unshielded twisted pairs"
      },
      {
        "id": "q16-mm1",
        "text_en": "contains a core, cladding, and coating",
        "text_vi": "contains a core, cladding, and coating"
      },
      {
        "id": "q16-cu2",
        "text_en": "contains a conductor, bedding, and sheathing",
        "text_vi": "contains a conductor, bedding, and sheathing"
      },
      {
        "id": "q16-mm2",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "comprised of insulated glass strands"
      }
    ],
    "drop_zones": [
      {
        "id": "q16-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q16-cu1",
          "q16-cu2"
        ]
      },
      {
        "id": "q16-mmf",
        "label_en": "multi-mode fiber",
        "label_vi": "multi-mode fiber",
        "target_ids": [
          "q16-mm1",
          "q16-mm2"
        ]
      }
    ],
    "explanation": "Phân biệt cấu tạo vật lý giữa Cáp Đồng (copper) và Cáp Quang Đa Mốt (multi-mode fiber):\n- **copper (Cáp đồng)**:\n  + Được cấu tạo từ các cặp dây xoắn có bọc kim hoặc không bọc kim (shielded and unshielded twisted pairs - STP/UTP).\n  + Gồm lõi dẫn điện (conductor), lớp đệm (bedding), và lớp vỏ bảo vệ (sheathing).\n- **multi-mode fiber (Cáp quang đa mốt)**:\n  + Gồm lõi truyền sáng (core), lớp phản xạ (cladding), và lớp vỏ bảo vệ bên ngoài (coating).\n  + Cấu tạo từ các sợi thủy tinh cách điện (insulated glass strands)."
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
        "text_vi": "sends data in a specific order"
      },
      {
        "id": "q17-t2",
        "text_en": "requires an established connection",
        "text_vi": "requires an established connection"
      },
      {
        "id": "q17-t3",
        "text_en": "supports web browsing",
        "text_vi": "supports web browsing"
      },
      {
        "id": "q17-u1",
        "text_en": "suited for live streaming",
        "text_vi": "suited for live streaming"
      },
      {
        "id": "q17-u2",
        "text_en": "retransmission is unsupported",
        "text_vi": "retransmission is unsupported"
      },
      {
        "id": "q17-u3",
        "text_en": "tolerates packet loss",
        "text_vi": "tolerates packet loss"
      }
    ],
    "drop_zones": [
      {
        "id": "q17-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q17-t1",
          "q17-t2",
          "q17-t3"
        ]
      },
      {
        "id": "q17-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
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
    "prompt_en": "Drag and drop the Cisco IOS attack mitigation features from the left onto the types of network attack that they mitigate on the right.",
    "prompt_vi": "Kéo thả các tính năng bảo mật Cisco IOS từ bên trái vào đúng các loại hình tấn công mạng tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q18_a.png",
    "answer_image": "images/dnd/dnd_q18_b.png",
    "source_items": [
      {
        "id": "q18-dhcp",
        "text_en": "DHCP snooping",
        "text_vi": "DHCP snooping"
      },
      {
        "id": "q18-dai",
        "text_en": "Dynamic ARP Inspection",
        "text_vi": "Dynamic ARP Inspection"
      },
      {
        "id": "q18-ipsg",
        "text_en": "IP Source Guard",
        "text_vi": "IP Source Guard"
      },
      {
        "id": "q18-storm",
        "text_en": "Storm control",
        "text_vi": "Storm control"
      }
    ],
    "drop_zones": [
      {
        "id": "q18-z1",
        "label_en": "rogue server that spoofs IP configuration",
        "label_vi": "rogue server that spoofs IP configuration",
        "target_ids": [
          "q18-dhcp"
        ]
      },
      {
        "id": "q18-z2",
        "label_en": "cache poisoning",
        "label_vi": "cache poisoning",
        "target_ids": [
          "q18-dai"
        ]
      },
      {
        "id": "q18-z3",
        "label_en": "flood attacks",
        "label_vi": "flood attacks",
        "target_ids": [
          "q18-storm"
        ]
      },
      {
        "id": "q18-z4",
        "label_en": "rogue clients on the network",
        "label_vi": "rogue clients on the network",
        "target_ids": [
          "q18-ipsg"
        ]
      }
    ],
    "explanation": "Bộ 4 giải pháp bảo mật Layer 2 cốt lõi của Cisco IOS:\n1. **rogue server that spoofs IP configuration** -> **DHCP snooping**: Ngăn chặn máy chủ DHCP giả mạo phát cấu hình IP sai cho client bằng cách phân loại cổng Trusted/Untrusted.\n2. **cache poisoning** -> **Dynamic ARP Inspection (DAI)**: Kiểm tra tính hợp lệ của gói tin ARP dựa trên bảng DHCP Snooping Binding để chống nhiễm độc bảng ARP cache.\n3. **flood attacks** -> **Storm control**: Giới hạn lưu lượng Broadcast, Multicast hoặc Unicast flood trên cổng switch để chống tràn băng thông.\n4. **rogue clients on the network** -> **IP Source Guard (IPSG)**: Ngăn chặn máy trạm giả mạo địa chỉ IP nguồn bằng cách lọc gói tin qua bảng DHCP Snooping Binding."
  },
  {
    "id": 19,
    "title": "Câu 19: So Sánh Toàn Diện Giao Thức TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristics from the left onto the corresponding protocol types on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào đúng loại giao thức tương ứng ở bên phải. Không phải tất cả đặc tính đều được dùng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q19_a.png",
    "answer_image": "images/dnd/dnd_q19_b.png",
    "source_items": [
      {
        "id": "q19-dist",
        "text_en": "belongs to OSI Layer 3",
        "text_vi": "belongs to OSI Layer 3"
      },
      {
        "id": "q19-t1",
        "text_en": "uses a three-way handshake",
        "text_vi": "uses a three-way handshake"
      },
      {
        "id": "q19-u1",
        "text_en": "faster data transmission",
        "text_vi": "faster data transmission"
      },
      {
        "id": "q19-u2",
        "text_en": "used for streaming and VoIP",
        "text_vi": "used for streaming and VoIP"
      },
      {
        "id": "q19-u3",
        "text_en": "connectionless protocol",
        "text_vi": "connectionless protocol"
      },
      {
        "id": "q19-t2",
        "text_en": "preferred for web browsing",
        "text_vi": "preferred for web browsing"
      },
      {
        "id": "q19-t3",
        "text_en": "provides a reliable connection",
        "text_vi": "provides a reliable connection"
      }
    ],
    "drop_zones": [
      {
        "id": "q19-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q19-t1",
          "q19-t2",
          "q19-t3"
        ]
      },
      {
        "id": "q19-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
        "target_ids": [
          "q19-u1",
          "q19-u2",
          "q19-u3"
        ]
      }
    ],
    "explanation": "So sánh chi tiết TCP vs UDP:\n- **TCP (Transmission Control Protocol)**:\n  + Thiết lập kết nối 3 bước tin cậy: *uses a three-way handshake*.\n  + Phù hợp cho duyệt web (HTTP/HTTPS): *preferred for web browsing*.\n  + Cung cấp kết nối tin cậy có kiểm soát lỗi: *provides a reliable connection*.\n- **UDP (User Datagram Protocol)**:\n  + Tốc độ truyền tải nhanh do không có độ trễ bắt tay: *faster data transmission*.\n  + Ứng dụng truyền thông thời gian thực: *used for streaming and VoIP*.\n  + Giao thức phi kết nối: *connectionless protocol*.\n- **Mồi nhử không dùng (Distractor)**: *belongs to OSI Layer 3* (Cả TCP và UDP đều thuộc tầng Transport - Layer 4 trong mô hình OSI, không phải Layer 3 Network)."
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
        "text_vi": "is easy to tap into and obtain secure information"
      },
      {
        "id": "q20-cu2",
        "text_en": "is comprised of shielded and unshielded twisted pairs",
        "text_vi": "is comprised of shielded and unshielded twisted pairs"
      },
      {
        "id": "q20-mm1",
        "text_en": "attenuation increases over long distances",
        "text_vi": "attenuation increases over long distances"
      },
      {
        "id": "q20-mm2",
        "text_en": "vulnerable to damage when handled",
        "text_vi": "vulnerable to damage when handled"
      }
    ],
    "drop_zones": [
      {
        "id": "q20-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q20-cu1",
          "q20-cu2"
        ]
      },
      {
        "id": "q20-mmf",
        "label_en": "multi-mode fiber",
        "label_vi": "multi-mode fiber",
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
    "prompt_en": "Drag and drop the Ansible terms from the left onto the correct definitions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ Ansible từ bên trái vào đúng các định nghĩa tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q21_a.png",
    "answer_image": "images/dnd/dnd_q21_b.png",
    "source_items": [
      {
        "id": "q21-control",
        "text_en": "control node",
        "text_vi": "control node"
      },
      {
        "id": "q21-inventory",
        "text_en": "inventory",
        "text_vi": "inventory"
      },
      {
        "id": "q21-managed",
        "text_en": "managed node",
        "text_vi": "managed node"
      },
      {
        "id": "q21-module",
        "text_en": "module",
        "text_vi": "module"
      },
      {
        "id": "q21-playbook",
        "text_en": "playbook",
        "text_vi": "playbook"
      },
      {
        "id": "q21-task",
        "text_en": "task",
        "text_vi": "task"
      }
    ],
    "drop_zones": [
      {
        "id": "q21-z1",
        "label_en": "collection of actions to perform on target devices, expressed in YAML format",
        "label_vi": "collection of actions to perform on target devices, expressed in YAML format",
        "target_ids": [
          "q21-playbook"
        ]
      },
      {
        "id": "q21-z2",
        "label_en": "device with Ansible installed that manages target devices",
        "label_vi": "device with Ansible installed that manages target devices",
        "target_ids": [
          "q21-control"
        ]
      },
      {
        "id": "q21-z3",
        "label_en": "network device, without Ansible installed, upon which commands can be executed",
        "label_vi": "network device, without Ansible installed, upon which commands can be executed",
        "target_ids": [
          "q21-managed"
        ]
      },
      {
        "id": "q21-z4",
        "label_en": "specific action to be performed on one or more target devices",
        "label_vi": "specific action to be performed on one or more target devices",
        "target_ids": [
          "q21-task"
        ]
      },
      {
        "id": "q21-z5",
        "label_en": "unit of Python code to be executed",
        "label_vi": "unit of Python code to be executed",
        "target_ids": [
          "q21-module"
        ]
      },
      {
        "id": "q21-z6",
        "label_en": "Ansible file that defines the target devices upon which commands and tasks can be executed",
        "label_vi": "Ansible file that defines the target devices upon which commands and tasks can be executed",
        "target_ids": [
          "q21-inventory"
        ]
      }
    ],
    "explanation": "6 thuật ngữ kiến trúc cốt lõi của công cụ tự động hóa Ansible:\n1. **playbook**: Tập hợp các hành động (tasks) thực hiện trên các thiết bị đích, được viết dưới định dạng YAML (*collection of actions to perform on target devices, expressed in YAML format*).\n2. **control node**: Thiết bị cài đặt phần mềm Ansible để quản lý và điều khiển các thiết bị đích (*device with Ansible installed that manages target devices*).\n3. **managed node**: Thiết bị mạng hoặc máy chủ không cần cài Ansible, nơi các lệnh được thực thi qua SSH (*network device, without Ansible installed, upon which commands can be executed*).\n4. **task**: Một hành động cụ thể cần thực hiện trên một hoặc nhiều thiết bị đích (*specific action to be performed on one or more target devices*).\n5. **module**: Đơn vị mã Python thực thi thực tế để hoàn thành một nhiệm vụ cụ thể (*unit of Python code to be executed*).\n6. **inventory**: Tệp tin Ansible định nghĩa danh sách các thiết bị đích cần quản lý (*Ansible file that defines the target devices upon which commands and tasks can be executed*)."
  },
  {
    "id": 22,
    "title": "Câu 22: Xác Định Tham Số Tuyến Đường Khớp Đích Đến",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. A packet is destined for 192.168.20.100. Drag and drop the parameters of the destination route from the left onto the routing table components they represent on the right. Not all parameters are used.",
    "prompt_vi": "Tham chiếu sơ đồ. Một gói tin có địa chỉ đích là 192.168.20.100. Kéo thả các tham số của tuyến đường đích từ bên trái vào các thành phần bảng định tuyến tương ứng ở bên phải. Không phải tất cả các tham số đều được sử dụng.",
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
        "id": "q22-p29",
        "text_en": "/29",
        "text_vi": "/29"
      },
      {
        "id": "q22-m40",
        "text_en": "40",
        "text_vi": "40"
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
        "id": "q22-p27",
        "text_en": "/27",
        "text_vi": "/27"
      },
      {
        "id": "q22-ad110",
        "text_en": "110",
        "text_vi": "110"
      }
    ],
    "drop_zones": [
      {
        "id": "q22-z1",
        "label_en": "Prefix",
        "label_vi": "Prefix",
        "target_ids": [
          "q22-p28"
        ]
      },
      {
        "id": "q22-z2",
        "label_en": "AD",
        "label_vi": "AD",
        "target_ids": [
          "q22-ad110"
        ]
      },
      {
        "id": "q22-z3",
        "label_en": "Metric/Cost",
        "label_vi": "Metric/Cost",
        "target_ids": [
          "q22-m30"
        ]
      }
    ],
    "explanation": "Quy trình xác định tuyến đường cho gói tin có đích đến `192.168.20.100`:\n1. **Kiểm tra dải địa chỉ mạng (Subnet Range):**\n   - Tuyến `/27`: `192.168.20.64/27` (dải .64 - .95) -> Không khớp.\n   - Tuyến `/29`: `192.168.20.104/29` (dải .104 - .111) -> Không khớp.\n   - Tuyến `/28`: `192.168.20.96/28` (dải .96 - .111) -> **Khớp chính xác** vì chứa địa chỉ đích `.100`.\n2. **Xác định các tham số của dòng định tuyến tương ứng:**\n   Dòng route OSPF hiển thị: `O 192.168.20.96/28 [110/30] via 10.0.0.3`\n   - **Prefix**: `/28`\n   - **AD (Administrative Distance)**: `110` (giá trị AD của OSPF)\n   - **Metric/Cost**: `30`"
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
        "text_vi": "may be used by multiple organizations at the same time"
      },
      {
        "id": "q23-ula2",
        "text_en": "allows sites to be combined without address conflicts",
        "text_vi": "allows sites to be combined without address conflicts"
      },
      {
        "id": "q23-multi1",
        "text_en": "sends packets to a group address rather than a single address",
        "text_vi": "sends packets to a group address rather than a single address"
      },
      {
        "id": "q23-multi2",
        "text_en": "never used as a source address",
        "text_vi": "never used as a source address"
      }
    ],
    "drop_zones": [
      {
        "id": "q23-ula",
        "label_en": "Unique Local Address",
        "label_vi": "Unique Local Address",
        "target_ids": [
          "q23-ula1",
          "q23-ula2"
        ]
      },
      {
        "id": "q23-multicast",
        "label_en": "Multicast Address",
        "label_vi": "Multicast Address",
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
        "text_vi": "comprised of shielded and unshielded twisted pairs"
      },
      {
        "id": "q24-tp2",
        "text_en": "is affected by electrical and magnetic interference",
        "text_vi": "is affected by electrical and magnetic interference"
      },
      {
        "id": "q24-sm1",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "comprised of insulated glass strands"
      },
      {
        "id": "q24-sm2",
        "text_en": "uses a single wavelength of light",
        "text_vi": "uses a single wavelength of light"
      }
    ],
    "drop_zones": [
      {
        "id": "q24-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q24-tp1",
          "q24-tp2"
        ]
      },
      {
        "id": "q24-smf",
        "label_en": "single-mode fiber",
        "label_vi": "single-mode fiber",
        "target_ids": [
          "q24-sm1",
          "q24-sm2"
        ]
      }
    ],
    "explanation": "- **Twisted-Pair Cabling**: Dây đồng dẫn điện nên nhạy cảm với nhiễu từ động cơ, đèn huỳnh quang (EMI).\n- **Single-Mode Fiber (SMF)**: Lõi rất nhỏ 9 µm, truyền 1 tia sáng duy nhất với 1 bước sóng xác định (1310nm hoặc 1550nm), không có tán sắc mode, không bị nhiễu điện từ."
  },
  {
    "id": 25,
    "title": "Câu 25: Toàn Vẹn Dữ Liệu vs Tốc Độ: TCP & UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the TCP and UDP characteristics from the left onto the supporting protocols on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các đặc tính của TCP và UDP từ bên trái vào đúng giao thức hỗ trợ tương ứng ở bên phải. Không phải tất cả các tùy chọn đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q25_a.png",
    "answer_image": "images/dnd/dnd_q25_b.png",
    "source_items": [
      {
        "id": "q25-t1",
        "text_en": "uses sequence numbers",
        "text_vi": "uses sequence numbers"
      },
      {
        "id": "q25-u1",
        "text_en": "supports real-time applications",
        "text_vi": "supports real-time applications"
      },
      {
        "id": "q25-t2",
        "text_en": "relies on acknowledgment packets",
        "text_vi": "relies on acknowledgment packets"
      },
      {
        "id": "q25-d1",
        "text_en": "operates on OSI Layer 5",
        "text_vi": "operates on OSI Layer 5"
      },
      {
        "id": "q25-u2",
        "text_en": "connectionless at transport layer",
        "text_vi": "connectionless at transport layer"
      },
      {
        "id": "q25-u3",
        "text_en": "minimal error checking",
        "text_vi": "minimal error checking"
      },
      {
        "id": "q25-t3",
        "text_en": "ensures data integrity",
        "text_vi": "ensures data integrity"
      }
    ],
    "drop_zones": [
      {
        "id": "q25-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q25-t1",
          "q25-t2",
          "q25-t3"
        ]
      },
      {
        "id": "q25-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
        "target_ids": [
          "q25-u1",
          "q25-u2",
          "q25-u3"
        ]
      }
    ],
    "explanation": "Đặc trưng phân biệt giữa hai giao thức tầng Giao vận (Transport Layer - Layer 4):\n- **TCP (Transmission Control Protocol)**:\n  + `uses sequence numbers`: Sử dụng số thứ tự sequence number để sắp xếp lại các gói tin theo đúng thứ tự.\n  + `relies on acknowledgment packets`: Dựa vào gói tin xác nhận (ACK) để đảm bảo truyền tin tin cậy.\n  + `ensures data integrity`: Đảm bảo tính toàn vẹn dữ liệu thông qua cơ chế kiểm tra lỗi và truyền lại gói tin bị mất.\n- **UDP (User Datagram Protocol)**:\n  + `supports real-time applications`: Tối ưu cho các ứng dụng thời gian thực (VoIP, streaming video) nhờ độ trễ thấp.\n  + `connectionless at transport layer`: Giao thức phi kết nối tại tầng Transport (không cần bắt tay 3 bước SYN-SYN/ACK-ACK).\n  + `minimal error checking`: Chỉ kiểm tra lỗi tối thiểu qua trường Checksum đơn giản, không truyền lại gói tin lỗi.\n*Mồi nhử:* `operates on OSI Layer 5` là sai vì cả TCP và UDP đều hoạt động ở Tầng 4 (Transport Layer), không phải Tầng 5 (Session Layer)."
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
        "id": "q26-ap1",
        "text_en": "formats an Ethernet frame and forwards to a destination",
        "text_vi": "formats an Ethernet frame and forwards to a destination"
      },
      {
        "id": "q26-ap2",
        "text_en": "supports both IEEE 802.11 and Ethernet standards",
        "text_vi": "supports both IEEE 802.11 and Ethernet standards"
      },
      {
        "id": "q26-wlc1",
        "text_en": "makes forwarding decisions when in LWAP mode",
        "text_vi": "makes forwarding decisions when in LWAP mode"
      },
      {
        "id": "q26-wlc2",
        "text_en": "used on-premise and/or cloud-based",
        "text_vi": "used on-premise and/or cloud-based"
      },
      {
        "id": "q26-dist",
        "text_en": "provides security policies and content filtering",
        "text_vi": "provides security policies and content filtering"
      }
    ],
    "drop_zones": [
      {
        "id": "q26-ap",
        "label_en": "Access Point",
        "label_vi": "Access Point",
        "target_ids": [
          "q26-ap1",
          "q26-ap2"
        ]
      },
      {
        "id": "q26-wlc",
        "label_en": "Wireless LAN Controller",
        "label_vi": "Wireless LAN Controller",
        "target_ids": [
          "q26-wlc1",
          "q26-wlc2"
        ]
      }
    ],
    "explanation": "Chức năng cốt lõi của từng thiết bị mạng Cisco:\n- **Firewall**: Lọc gói trạng thái (Stateful inspection), NAT, VPN, IPS, Content Filtering.\n- **Switch**: Chuyển tiếp Ethernet Frame Layer 2 dựa vào bảng MAC (CAM table).\n- **Access Point**: Cầu nối sóng radio 802.11 sang mạng dây Ethernet 802.3.\n- **Wireless LAN Controller**: Quản lý tập trung hàng trăm AP qua đường hầm CAPWAP/LWAPP."
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
        "id": "q27-c1",
        "text_en": "contains a conductor, bedding, and sheathing",
        "text_vi": "contains a conductor, bedding, and sheathing"
      },
      {
        "id": "q27-c2",
        "text_en": "affected by electrical and magnetic interference",
        "text_vi": "affected by electrical and magnetic interference"
      },
      {
        "id": "q27-sm1",
        "text_en": "contains a core, cladding, and coating",
        "text_vi": "contains a core, cladding, and coating"
      },
      {
        "id": "q27-sm2",
        "text_en": "comprised of insulated glass strands",
        "text_vi": "comprised of insulated glass strands"
      }
    ],
    "drop_zones": [
      {
        "id": "q27-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q27-c1",
          "q27-c2"
        ]
      },
      {
        "id": "q27-smf",
        "label_en": "single-mode fiber",
        "label_vi": "single-mode fiber",
        "target_ids": [
          "q27-sm1",
          "q27-sm2"
        ]
      }
    ],
    "explanation": "Cấu tạo các loại cáp:\n- **Coaxial Cable**: Dây cáp đồng trục gồm lõi dẫn kim loại, lớp điện môi (bedding/dielectric) và vỏ chắn nhiễu (sheathing).\n- **Twisted-Pair Cable**: Cáp đồng xoắn đôi, dễ bị nhiễu sóng điện từ EMI.\n- **Single-Mode Fiber**: Lõi quang gồm Core (9 µm), Cladding (125 µm) và lớp vỏ Coating bảo vệ."
  },
  {
    "id": 28,
    "title": "Câu 28: Cơ Chế Tin Cậy Tầng Transport: TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the protocol characteristics from the left onto the corresponding types on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính của giao thức từ bên trái vào nhóm TCP hoặc UDP tương ứng ở bên phải. Chú ý: Không phải mọi đặc tính đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q28_a.png",
    "answer_image": "images/dnd/dnd_q28_b.png",
    "source_items": [
      {
        "id": "q28-ack",
        "text_en": "acknowledgement mechanism",
        "text_vi": "acknowledgement mechanism"
      },
      {
        "id": "q28-guar",
        "text_en": "guaranteed transmission",
        "text_vi": "guaranteed transmission"
      },
      {
        "id": "q28-low",
        "text_en": "low overhead",
        "text_vi": "low overhead"
      },
      {
        "id": "q28-conn",
        "text_en": "connectionless",
        "text_vi": "connectionless"
      },
      {
        "id": "q28-noerr",
        "text_en": "no error checking",
        "text_vi": "no error checking"
      }
    ],
    "drop_zones": [
      {
        "id": "q28-tcp",
        "label_en": "TCP",
        "label_vi": "TCP",
        "target_ids": [
          "q28-ack",
          "q28-guar"
        ]
      },
      {
        "id": "q28-udp",
        "label_en": "UDP",
        "label_vi": "UDP",
        "target_ids": [
          "q28-low",
          "q28-conn"
        ]
      }
    ],
    "explanation": "- **TCP**: Có cơ chế báo nhận (acknowledgment mechanism) và cam kết truyền tin thành công (guaranteed transmission).\n- **UDP**: Chi phí tiêu hao gói tin thấp (low overhead).\n*Lưu ý:* Mục 'no error checking' là mồi nhử không dùng trong đề thi Cisco gốc (vì UDP vẫn có trường Checksum để kiểm tra lỗi tối thiểu ở tầng 4)."
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
        "text_vi": "security policy"
      },
      {
        "id": "q29-standard",
        "text_en": "security standard",
        "text_vi": "security standard"
      },
      {
        "id": "q29-aware",
        "text_en": "awareness",
        "text_vi": "awareness"
      },
      {
        "id": "q29-edu",
        "text_en": "education",
        "text_vi": "education"
      },
      {
        "id": "q29-train",
        "text_en": "training",
        "text_vi": "training"
      }
    ],
    "drop_zones": [
      {
        "id": "q29-z1",
        "label_en": "security policy",
        "label_vi": "security policy",
        "target_ids": [
          "q29-policy"
        ]
      },
      {
        "id": "q29-z2",
        "label_en": "security standard",
        "label_vi": "security standard",
        "target_ids": [
          "q29-standard"
        ]
      },
      {
        "id": "q29-z3",
        "label_en": "user-awareness learning level that focuses on learning about topics and practices beyond what is typically required by the user's job",
        "label_vi": "user-awareness learning level that focuses on learning about topics and practices beyond what is typically required by the user's job",
        "target_ids": [
          "q29-aware"
        ]
      },
      {
        "id": "q29-z4",
        "label_en": "user-awareness learning level that focuses on security practices that all employees must understand and enforce",
        "label_vi": "user-awareness learning level that focuses on security practices that all employees must understand and enforce",
        "target_ids": [
          "q29-edu"
        ]
      },
      {
        "id": "q29-z5",
        "label_en": "user-awareness learning level that focuses on teaching employees how to perform tasks specifically required by their jobs",
        "label_vi": "user-awareness learning level that focuses on teaching employees how to perform tasks specifically required by their jobs",
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
    "prompt_en": "Drag and drop the characteristics from the left onto the device type on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào loại thiết bị tương ứng ở bên phải. Không phải tất cả các đặc tính đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q30_a.png",
    "answer_image": "images/dnd/dnd_q30_b.png",
    "source_items": [
      {
        "id": "q30-wlc1",
        "text_en": "uses templates to implement QOS configuration",
        "text_vi": "uses templates to implement QOS configuration"
      },
      {
        "id": "q30-ap1",
        "text_en": "ability to boost a wi-fi signal",
        "text_vi": "ability to boost a wi-fi signal"
      },
      {
        "id": "q30-ap2",
        "text_en": "requires a special adapter for PoE",
        "text_vi": "requires a special adapter for PoE"
      },
      {
        "id": "q30-d1",
        "text_en": "supplies user connection data within a device group",
        "text_vi": "supplies user connection data within a device group"
      },
      {
        "id": "q30-wlc2",
        "text_en": "interconnects wireless LANs to a wired network",
        "text_vi": "interconnects wireless LANs to a wired network"
      }
    ],
    "drop_zones": [
      {
        "id": "q30-ap",
        "label_en": "Access Point",
        "label_vi": "Access Point",
        "target_ids": [
          "q30-ap1",
          "q30-ap2"
        ]
      },
      {
        "id": "q30-wlc",
        "label_en": "Wireless LAN Controller",
        "label_vi": "Wireless LAN Controller",
        "target_ids": [
          "q30-wlc1",
          "q30-wlc2"
        ]
      }
    ],
    "explanation": "Theo đáp án chuẩn kỳ thi CCNA:\n- **Access Point (AP)**:\n  + `ability to boost a wi-fi signal`: Khả năng khuếch đại / mở rộng vùng phủ sóng tín hiệu Wi-Fi.\n  + `requires a special adapter for PoE`: Cần adapter PoE chuyên dụng (Power Injector) nếu hạ tầng switch không cấp nguồn PoE trực tiếp.\n- **Wireless LAN Controller (WLC)**:\n  + `uses templates to implement QOS configuration`: Sử dụng các profile/template để triển khai chính sách QoS đồng loạt cho hàng loạt AP.\n  + `interconnects wireless LANs to a wired network`: Đóng vai trò cầu nối chuyển tiếp lưu lượng giữa mạng không dây (CAPWAP tunnel) và mạng có dây doanh nghiệp.\n*Mồi nhử:* `supplies user connection data within a device group` không được sử dụng."
  },
  {
    "id": 31,
    "title": "Câu 31: Cấu Hình Định Tuyến Tĩnh (Host A Đến Host B)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. An engineer must configure a static route between two networks so that host A communicates with host B. Drag and drop the commands from the left onto the routers where they must be configured on the right. Not all commands are used.",
    "prompt_vi": "Tham chiếu sơ đồ. Kỹ sư cần cấu hình định tuyến tĩnh giữa hai mạng để Host A có thể liên lạc với Host B. Kéo thả câu lệnh từ bên trái vào đúng Router tương ứng ở bên phải. Không phải tất cả các câu lệnh đều được sử dụng.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q31_a.png",
    "question_image": "images/dnd/dnd_q31_b.png",
    "answer_image": "images/dnd/dnd_q31_c.png",
    "source_items": [
      {
        "id": "q31-r1",
        "text_en": "ip route 10.10.13.0 255.255.255.128 10.10.10.1",
        "text_vi": "ip route 10.10.13.0 255.255.255.128 10.10.10.1"
      },
      {
        "id": "q31-r2a",
        "text_en": "ip route 10.10.13.0 255.255.255.128 10.10.10.5",
        "text_vi": "ip route 10.10.13.0 255.255.255.128 10.10.10.5"
      },
      {
        "id": "q31-d1",
        "text_en": "ip route 10.10.13.10 255.255.255.255 10.10.10.1",
        "text_vi": "ip route 10.10.13.10 255.255.255.255 10.10.10.1"
      },
      {
        "id": "q31-r2b",
        "text_en": "ip route 10.10.14.0 255.255.255.0 10.10.10.2",
        "text_vi": "ip route 10.10.14.0 255.255.255.0 10.10.10.2"
      },
      {
        "id": "q31-r3",
        "text_en": "ip route 10.10.14.0 255.255.255.0 10.10.10.6",
        "text_vi": "ip route 10.10.14.0 255.255.255.0 10.10.10.6"
      },
      {
        "id": "q31-d2",
        "text_en": "ip route 10.10.14.10 255.255.255.255 10.10.10.6",
        "text_vi": "ip route 10.10.14.10 255.255.255.255 10.10.10.6"
      }
    ],
    "drop_zones": [
      {
        "id": "q31-z1",
        "label_en": "R1",
        "label_vi": "R1",
        "target_ids": [
          "q31-r1"
        ]
      },
      {
        "id": "q31-z2",
        "label_en": "R2",
        "label_vi": "R2",
        "target_ids": [
          "q31-r2a",
          "q31-r2b"
        ]
      },
      {
        "id": "q31-z3",
        "label_en": "R3",
        "label_vi": "R3",
        "target_ids": [
          "q31-r3"
        ]
      }
    ],
    "explanation": "Phân tích sơ đồ mạng và cấu hình định tuyến tĩnh `ip route <mạng đích> <subnet mask> <next-hop>`:\n- **Mạng Host A**: `10.10.14.0/24` (Subnet mask `255.255.255.0`), kết nối vào R1.\n- **Mạng Host B**: `10.10.13.0/25` (Subnet mask `255.255.255.128`), kết nối vào R3.\n- **Liên kết R1 - R2**: `10.10.10.0/30` (R1 IP: .2, R2 IP: .1).\n- **Liên kết R2 - R3**: `10.10.10.4/30` (R2 IP: .6, R3 IP: .5).\n\nCấu hình cần thiết trên từng Router:\n1. **R1**: Để gửi gói tin sang Host B, gửi qua next-hop R2 (`10.10.10.1`):\n   `ip route 10.10.13.0 255.255.255.128 10.10.10.1`\n2. **R2**: Nằm ở giữa, cần chuyển tiếp cả 2 chiều:\n   - Chiều sang Host B qua next-hop R3 (`10.10.10.5`): `ip route 10.10.13.0 255.255.255.128 10.10.10.5`\n   - Chiều về Host A qua next-hop R1 (`10.10.10.2`): `ip route 10.10.14.0 255.255.255.0 10.10.10.2`\n3. **R3**: Để gửi phản hồi về Host A, gửi qua next-hop R2 (`10.10.10.6`):\n   `ip route 10.10.14.0 255.255.255.0 10.10.10.6`\n*Mồi nhử:* Các câu lệnh route đích host `/32` (`255.255.255.255`) không dùng vì đề bài yêu cầu định tuyến cho toàn mạng (network route)."
  },
  {
    "id": 32,
    "title": "Câu 32: Khớp Tiền Tố Với Subnet Mask (Bảng Định Tuyến)",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the learned prefixes from the left onto the subnet masks on the right.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các tiền tố mạng học được từ bên trái vào đúng Subnet Mask dạng thập phân tương ứng ở bên phải theo bảng định tuyến.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q32_a.png",
    "question_image": "images/dnd/dnd_q32_b.png",
    "answer_image": "images/dnd/dnd_q32_c.png",
    "source_items": [
      {
        "id": "q32-p1",
        "text_en": "172.16.4.0",
        "text_vi": "172.16.4.0"
      },
      {
        "id": "q32-p2",
        "text_en": "172.16.2.128",
        "text_vi": "172.16.2.128"
      },
      {
        "id": "q32-p3",
        "text_en": "172.16.3.64",
        "text_vi": "172.16.3.64"
      },
      {
        "id": "q32-p4",
        "text_en": "172.16.3.128",
        "text_vi": "172.16.3.128"
      },
      {
        "id": "q32-p5",
        "text_en": "172.16.3.192",
        "text_vi": "172.16.3.192"
      }
    ],
    "drop_zones": [
      {
        "id": "q32-z-23",
        "label_en": "255.255.254.0",
        "label_vi": "255.255.254.0",
        "target_ids": [
          "q32-p1"
        ]
      },
      {
        "id": "q32-z-25",
        "label_en": "255.255.255.128",
        "label_vi": "255.255.255.128",
        "target_ids": [
          "q32-p2"
        ]
      },
      {
        "id": "q32-z-27",
        "label_en": "255.255.255.224",
        "label_vi": "255.255.255.224",
        "target_ids": [
          "q32-p3"
        ]
      },
      {
        "id": "q32-z-28",
        "label_en": "255.255.255.240",
        "label_vi": "255.255.255.240",
        "target_ids": [
          "q32-p4"
        ]
      },
      {
        "id": "q32-z-29",
        "label_en": "255.255.255.248",
        "label_vi": "255.255.255.248",
        "target_ids": [
          "q32-p5"
        ]
      }
    ],
    "explanation": "Đối chiếu bảng định tuyến trong exhibit để tìm subnet mask tương ứng:\n- `172.16.4.0/23` -> Subnet mask tương ứng là `255.255.254.0`\n- `172.16.2.128/25` -> Subnet mask tương ứng là `255.255.255.128`\n- `172.16.3.64/27` -> Subnet mask tương ứng là `255.255.255.224`\n- `172.16.3.128/28` -> Subnet mask tương ứng là `255.255.255.240`\n- `172.16.3.192/29` -> Subnet mask tương ứng là `255.255.255.248`"
  },
  {
    "id": 33,
    "title": "Câu 33: Đặc Trưng Của Giao Diện Northbound API Trong SDN",
    "category": "Automation & Programmability",
    "prompt_en": "Drag and drop the characteristics of northbound APIs from the left onto any position on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc tính đúng của Northbound API từ bên trái sang khung bên phải. Không phải tất cả đặc tính đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q33_a.png",
    "answer_image": "images/dnd/dnd_q33_b.png",
    "source_items": [
      {
        "id": "q33-c1",
        "text_en": "communicates between the SDN controller and the application plane",
        "text_vi": "communicates between the SDN controller and the application plane"
      },
      {
        "id": "q33-c2",
        "text_en": "supports REST-based requirements",
        "text_vi": "supports REST-based requirements"
      },
      {
        "id": "q33-c3",
        "text_en": "supports automation",
        "text_vi": "supports automation"
      },
      {
        "id": "q33-c4",
        "text_en": "supports data sharing between systems",
        "text_vi": "supports data sharing between systems"
      },
      {
        "id": "q33-d1",
        "text_en": "communicates between the SDN controller and the data plane",
        "text_vi": "communicates between the SDN controller and the data plane"
      },
      {
        "id": "q33-d2",
        "text_en": "uses OpenFlow to interface between the data and control planes",
        "text_vi": "uses OpenFlow to interface between the data and control planes"
      },
      {
        "id": "q33-d3",
        "text_en": "supports network virtualization protocols",
        "text_vi": "supports network virtualization protocols"
      }
    ],
    "drop_zones": [
      {
        "id": "q33-z1",
        "label_en": "Northbound API Characteristic 1",
        "label_vi": "Northbound API Characteristic 1",
        "target_ids": [
          "q33-c3"
        ]
      },
      {
        "id": "q33-z2",
        "label_en": "Northbound API Characteristic 2",
        "label_vi": "Northbound API Characteristic 2",
        "target_ids": [
          "q33-c1"
        ]
      },
      {
        "id": "q33-z3",
        "label_en": "Northbound API Characteristic 3",
        "label_vi": "Northbound API Characteristic 3",
        "target_ids": [
          "q33-c4"
        ]
      },
      {
        "id": "q33-z4",
        "label_en": "Northbound API Characteristic 4",
        "label_vi": "Northbound API Characteristic 4",
        "target_ids": [
          "q33-c2"
        ]
      }
    ],
    "explanation": "4 đặc tính cốt lõi của Northbound API trong SDN:\n1. `supports automation`: Hỗ trợ các công cụ và script tự động hóa mạng.\n2. `communicates between the SDN controller and the application plane`: Kết nối Controller lên tầng ứng dụng.\n3. `supports data sharing between systems`: Cho phép chia sẻ trạng thái và số liệu mạng cho các hệ thống giám sát.\n4. `supports REST-based requirements`: Cung cấp giao thức RESTful (HTTP GET/POST/PUT/DELETE).\n*Lưu ý:* Các mục liên quan đến data plane, OpenFlow và giao thức ảo hóa mạng là Southbound API, đóng vai trò mồi nhử."
  },
  {
    "id": 34,
    "title": "Câu 34: Các Tầng Trong Kiến Trúc Mạng Phân Cấp Cisco",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the common functions from the left onto the corresponding network topology architecture layer on the right. Not all common functions are used.",
    "prompt_vi": "Kéo thả các chức năng phổ biến từ bên trái vào đúng tầng kiến trúc mạng tương ứng ở bên phải. Không phải tất cả các chức năng đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q34_a.png",
    "answer_image": "images/dnd/dnd_q34_b.png",
    "source_items": [
      {
        "id": "q34-sl",
        "text_en": "redundant architectures within data centers",
        "text_vi": "redundant architectures within data centers"
      },
      {
        "id": "q34-core",
        "text_en": "fast switching",
        "text_vi": "fast switching"
      },
      {
        "id": "q34-acc",
        "text_en": "connect end users",
        "text_vi": "connect end users"
      },
      {
        "id": "q34-dist",
        "text_en": "aggregate traffic flows from customers",
        "text_vi": "aggregate traffic flows from customers"
      },
      {
        "id": "q34-d1",
        "text_en": "monitors network traffic",
        "text_vi": "monitors network traffic"
      }
    ],
    "drop_zones": [
      {
        "id": "q34-z-acc",
        "label_en": "Access",
        "label_vi": "Access",
        "target_ids": [
          "q34-acc"
        ]
      },
      {
        "id": "q34-z-core",
        "label_en": "Core",
        "label_vi": "Core",
        "target_ids": [
          "q34-core"
        ]
      },
      {
        "id": "q34-z-sl",
        "label_en": "Spine-leaf",
        "label_vi": "Spine-leaf",
        "target_ids": [
          "q34-sl"
        ]
      },
      {
        "id": "q34-z-dist",
        "label_en": "Distribution",
        "label_vi": "Distribution",
        "target_ids": [
          "q34-dist"
        ]
      }
    ],
    "explanation": "Chức năng của các tầng kiến trúc mạng theo chuẩn Cisco:\n- **Access Layer**: `connect end users` (kết nối người dùng cuối và thiết bị đầu cuối vào mạng).\n- **Core Layer**: `fast switching` (chuyển mạch siêu tốc, xương sống tốc độ cao không packet filtering).\n- **Spine-leaf Layer**: `redundant architectures within data centers` (kiến trúc dự phòng đa đường không nghẽn cho trung tâm dữ liệu).\n- **Distribution Layer**: `aggregate traffic flows from customers` (tập trung và tổng hợp các luồng lưu lượng từ tầng Access / khách hàng, thực thi chính sách bảo mật và định tuyến).\n*Mồi nhử:* `monitors network traffic` không được sử dụng."
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
        "text_vi": "comprised of shielded and unshielded twisted pairs"
      },
      {
        "id": "q35-tp2",
        "text_en": "is affected by electrical and magnetic interference",
        "text_vi": "is affected by electrical and magnetic interference"
      },
      {
        "id": "q35-sm1",
        "text_en": "composed of insulated glass strands",
        "text_vi": "composed of insulated glass strands"
      },
      {
        "id": "q35-sm2",
        "text_en": "uses a single wavelength of light",
        "text_vi": "uses a single wavelength of light"
      }
    ],
    "drop_zones": [
      {
        "id": "q35-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q35-tp1",
          "q35-tp2"
        ]
      },
      {
        "id": "q35-smf",
        "label_en": "single-mode fiber",
        "label_vi": "single-mode fiber",
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
        "text_vi": "Configure VACL"
      },
      {
        "id": "q36-dai",
        "text_en": "Configure dynamic ARP inspection",
        "text_vi": "Configure dynamic ARP inspection"
      },
      {
        "id": "q36-root",
        "text_en": "Configure root guard",
        "text_vi": "Configure root guard"
      },
      {
        "id": "q36-bpdu",
        "text_en": "Configure BPDU guard",
        "text_vi": "Configure BPDU guard"
      }
    ],
    "drop_zones": [
      {
        "id": "q36-z1",
        "label_en": "802.1q double tagging",
        "label_vi": "802.1q double tagging",
        "target_ids": [
          "q36-vacl"
        ]
      },
      {
        "id": "q36-z2",
        "label_en": "ARP spoofing",
        "label_vi": "ARP spoofing",
        "target_ids": [
          "q36-dai"
        ]
      },
      {
        "id": "q36-z3",
        "label_en": "Unwanted superior BPDUs",
        "label_vi": "Unwanted superior BPDUs",
        "target_ids": [
          "q36-root"
        ]
      },
      {
        "id": "q36-z4",
        "label_en": "Unwanted BPDUs on PortFast-enabled interfaces",
        "label_vi": "Unwanted BPDUs on PortFast-enabled interfaces",
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
        "text_vi": "New devices are configured using the physical console / CLI"
      },
      {
        "id": "q37-trad2",
        "text_en": "This type requires a distributed control plane",
        "text_vi": "This type requires a distributed control plane"
      },
      {
        "id": "q37-sdn1",
        "text_en": "This type allows better control over how networks work and are configured",
        "text_vi": "This type allows better control over how networks work and are configured"
      },
      {
        "id": "q37-sdn2",
        "text_en": "This type enables networks to integrate with applications through APIs",
        "text_vi": "This type enables networks to integrate with applications through APIs"
      },
      {
        "id": "q37-sdn3",
        "text_en": "This type provisions resources from a centralized location",
        "text_vi": "This type provisions resources from a centralized location"
      }
    ],
    "drop_zones": [
      {
        "id": "q37-traditional",
        "label_en": "Traditional Networking",
        "label_vi": "Traditional Networking",
        "target_ids": [
          "q37-trad1",
          "q37-trad2"
        ]
      },
      {
        "id": "q37-controller",
        "label_en": "Controller-Based Networking",
        "label_vi": "Controller-Based Networking",
        "target_ids": [
          "q37-sdn1",
          "q37-sdn2",
          "q37-sdn3"
        ]
      }
    ],
    "explanation": "- **Traditional Networking**: Cấu hình phân tán, thủ công từng hộp (box-by-box) qua CLI/Console, tốn nhân lực, dễ sai sót cấu hình.\n- **Controller-Based Networking**: Quản lý tập trung, cung cấp API (RESTful) kết nối ứng dụng với hạ tầng, tự động hóa provisioning tài nguyên nhanh chóng."
  },
  {
    "id": 38,
    "title": "Câu 38: Đối Chiếu Subnet Mask Dạng Thập Phân Với Tiền Tố",
    "category": "IP Connectivity",
    "prompt_en": "Refer to the exhibit. Drag and drop the prefix lengths from the left onto the corresponding prefixes on the right. Not all prefixes are used.",
    "prompt_vi": "Tham chiếu sơ đồ. Kéo thả các subnet mask tương ứng từ bên trái vào đúng các địa chỉ mạng ở bên phải. Không phải tất cả các giá trị đều được sử dụng.",
    "has_exhibit": true,
    "exhibit_image": "images/dnd/dnd_q01_a.png",
    "question_image": "images/dnd/dnd_q38_b.png",
    "answer_image": "images/dnd/dnd_q38_c.png",
    "source_items": [
      {
        "id": "q38-m128",
        "text_en": "255.255.255.128",
        "text_vi": "255.255.255.128"
      },
      {
        "id": "q38-m224",
        "text_en": "255.255.255.224",
        "text_vi": "255.255.255.224"
      },
      {
        "id": "q38-m240",
        "text_en": "255.255.255.240",
        "text_vi": "255.255.255.240"
      },
      {
        "id": "q38-m248",
        "text_en": "255.255.255.248",
        "text_vi": "255.255.255.248"
      },
      {
        "id": "q38-d1",
        "text_en": "255.255.255.252",
        "text_vi": "255.255.255.252"
      }
    ],
    "drop_zones": [
      {
        "id": "q38-z1",
        "label_en": "10.10.13.0",
        "label_vi": "10.10.13.0",
        "target_ids": [
          "q38-m128"
        ]
      },
      {
        "id": "q38-z2",
        "label_en": "10.10.13.144",
        "label_vi": "10.10.13.144",
        "target_ids": [
          "q38-m240"
        ]
      },
      {
        "id": "q38-z3",
        "label_en": "10.10.13.160",
        "label_vi": "10.10.13.160",
        "target_ids": [
          "q38-m248"
        ]
      },
      {
        "id": "q38-z4",
        "label_en": "209.165.202.128",
        "label_vi": "209.165.202.128",
        "target_ids": [
          "q38-m224"
        ]
      }
    ],
    "explanation": "Dựa vào bảng định tuyến trong sơ đồ (`show ip route`):\n- `10.10.13.0/25` -> Tiền tố `/25` tương ứng với Subnet Mask `255.255.255.128`\n- `10.10.13.144/28` -> Tiền tố `/28` tương ứng với Subnet Mask `255.255.255.240`\n- `10.10.13.160/29` -> Tiền tố `/29` tương ứng với Subnet Mask `255.255.255.248`\n- `209.165.202.128` (thuộc khối `209.165.202.0/27`) -> Tiền tố `/27` tương ứng với Subnet Mask `255.255.255.224`\n*Mồi nhử:* `255.255.255.252` (/30) không được sử dụng."
  },
  {
    "id": 39,
    "title": "Câu 39: Chức Năng Các Tầng Kiến Trúc Mạng Data Center & Campus",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the network topology architecture types from the left onto the corresponding function on the right. Not all architecture types are used.",
    "prompt_vi": "Kéo thả các kiểu kiến trúc mạng từ bên trái vào đúng chức năng tương ứng ở bên phải. Không phải tất cả các kiểu kiến trúc đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q39_a.png",
    "answer_image": "images/dnd/dnd_q39_b.png",
    "source_items": [
      {
        "id": "q39-sl",
        "text_en": "spine leaf",
        "text_vi": "spine leaf"
      },
      {
        "id": "q39-acc",
        "text_en": "access",
        "text_vi": "access"
      },
      {
        "id": "q39-dist",
        "text_en": "distribution",
        "text_vi": "distribution"
      },
      {
        "id": "q39-core",
        "text_en": "core",
        "text_vi": "core"
      },
      {
        "id": "q39-d1",
        "text_en": "perimeter edge",
        "text_vi": "perimeter edge"
      }
    ],
    "drop_zones": [
      {
        "id": "q39-z-acc",
        "label_en": "end user connectivity",
        "label_vi": "end user connectivity",
        "target_ids": [
          "q39-acc"
        ]
      },
      {
        "id": "q39-z-sl",
        "label_en": "top-of-rack",
        "label_vi": "top-of-rack",
        "target_ids": [
          "q39-sl"
        ]
      },
      {
        "id": "q39-z-dist",
        "label_en": "provide routing, filtering, and WAN access",
        "label_vi": "provide routing, filtering, and WAN access",
        "target_ids": [
          "q39-dist"
        ]
      },
      {
        "id": "q39-z-core",
        "label_en": "switch packets as fast as possible",
        "label_vi": "switch packets as fast as possible",
        "target_ids": [
          "q39-core"
        ]
      }
    ],
    "explanation": "Đối chiếu kiểu kiến trúc mạng với chức năng tương ứng:\n- `end user connectivity`: **access** (tầng truy cập kết nối máy tính người dùng).\n- `top-of-rack`: **spine leaf** (mỗi rack đặt Leaf switch kết nối lên tầng Spine, kiến trúc chuẩn Data Center).\n- `provide routing, filtering, and WAN access`: **distribution** (tầng phân phối thực hiện định tuyến, lọc gói và kết nối WAN).\n- `switch packets as fast as possible`: **core** (tầng lõi chuyển mạch gói tin với tốc độ tối đa không độ trễ).\n*Mồi nhử:* `perimeter edge` không được sử dụng."
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
        "id": "q40-cu1",
        "text_en": "contains a conductor, bedding, and sheathing",
        "text_vi": "contains a conductor, bedding, and sheathing"
      },
      {
        "id": "q40-sm1",
        "text_en": "has minimal light reflection as the signal travels down the core",
        "text_vi": "has minimal light reflection as the signal travels down the core"
      },
      {
        "id": "q40-cu2",
        "text_en": "comprised of shielded or unshielded twisted pairs",
        "text_vi": "comprised of shielded or unshielded twisted pairs"
      },
      {
        "id": "q40-sm2",
        "text_en": "transmits signals using pulses of light",
        "text_vi": "transmits signals using pulses of light"
      }
    ],
    "drop_zones": [
      {
        "id": "q40-copper",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q40-cu1",
          "q40-cu2"
        ]
      },
      {
        "id": "q40-smf",
        "label_en": "single-mode fiber",
        "label_vi": "single-mode fiber",
        "target_ids": [
          "q40-sm1",
          "q40-sm2"
        ]
      }
    ],
    "explanation": "Phân loại đặc tính các loại cáp truyền dẫn mạng:\n- **copper (Cáp đồng)**:\n  + `contains a conductor, bedding, and sheathing`: Cấu trúc điển hình của cáp đồng trục (coaxial) gồm lõi dẫn điện, lớp đệm cách điện và vỏ bọc bảo vệ.\n  + `comprised of shielded or unshielded twisted pairs`: Cáp xoắn đôi gồm loại có chống nhiễu (STP) hoặc không chống nhiễu (UTP).\n- **single-mode fiber (Cáp quang đơn mốt)**:\n  + `has minimal light reflection as the signal travels down the core`: Lõi quang rất nhỏ (~9 µm) nên ánh sáng truyền thẳng, độ phản xạ tối thiểu, loại bỏ tán sắc mode.\n  + `transmits signals using pulses of light`: Truyền tải tín hiệu bằng các xung ánh sáng (laser)."
  },
  {
    "id": 41,
    "title": "Câu 41: Các Phương Thức Xác Thực Bảo Mật (Biometrics / Certificates / MFA)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the descriptions of security features from the left onto the corresponding security features on the right.",
    "prompt_vi": "Kéo thả các mô tả đặc điểm bảo mật từ bên trái vào các phương thức xác thực bảo mật tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q41_a.png",
    "answer_image": "images/dnd/dnd_q41_b.png",
    "source_items": [
      {
        "id": "q41-bio1",
        "text_en": "may use a fingerprint reader to authenticate users"
      },
      {
        "id": "q41-bio2",
        "text_en": "relies on a 'something you are' paradigm"
      },
      {
        "id": "q41-cert1",
        "text_en": "supports enterprise, third party, and public options"
      },
      {
        "id": "q41-cert2",
        "text_en": "issuer may revoke the digital credentials",
        "text_vi": "issuer may revoke the digital credentials"
      },
      {
        "id": "q41-mfa1",
        "text_en": "may use time-based or one-time passwords to authenticate users"
      },
      {
        "id": "q41-mfa2",
        "text_en": "requires two or more authentication methods to verify a user's identity"
      }
    ],
    "drop_zones": [
      {
        "id": "q41-z-bio",
        "label_en": "Biometrics",
        "label_vi": "Biometrics",
        "target_ids": [
          "q41-bio1",
          "q41-bio2"
        ]
      },
      {
        "id": "q41-z-cert",
        "label_en": "Certificates",
        "label_vi": "Certificates",
        "target_ids": [
          "q41-cert1",
          "q41-cert2"
        ]
      },
      {
        "id": "q41-z-mfa",
        "label_en": "Multifactor Authentication",
        "label_vi": "Multifactor Authentication",
        "target_ids": [
          "q41-mfa1",
          "q41-mfa2"
        ]
      }
    ],
    "explanation": "\n<strong>Giải thích chi tiết 3 cơ chế xác thực bảo mật:</strong>\n<ul>\n  <li><strong>Biometrics (Sinh trắc học):</strong>\n    <ul>\n      <li><code>may use a fingerprint reader to authenticate users</code>: Sử dụng dấu vân tay, quét võng mạc, nhận diện khuôn mặt.</li>\n      <li><code>relies on a 'something you are' paradigm</code>: Dựa trên yếu tố tự nhiên gắn liền với cơ thể con người (\"thứ bạn là\").</li>\n    </ul>\n  </li>\n  <li><strong>Digital Certificates (Chứng chỉ số / PKI):</strong>\n    <ul>\n      <li><code>supports enterprise, third party, and public options</code>: Có thể do tổ chức nội bộ (Enterprise CA), bên thứ ba hoặc CA công cộng quốc tế cấp phát.</li>\n      <li><code>issuer may revoke the digital certificate</code>: Cơ quan phát hành chứng thực (CA) có quyền thu hồi chứng chỉ trước hạn qua danh sách CRL hoặc giao thức OCSP khi khóa bí mật bị lộ.</li>\n    </ul>\n  </li>\n  <li><strong>Multifactor Authentication (MFA - Xác thực đa yếu tố):</strong>\n    <ul>\n      <li><code>requires two or more authentication methods to verify a user's identity</code>: Bắt buộc kết hợp từ hai yếu tố độc lập trở lên (như mật khẩu + OTP điện thoại).</li>\n      <li><code>may use time-based or one-time passwords to authenticate users</code>: Thường dùng mã OTP hoặc TOTP (Time-based One-Time Password như Google Authenticator, Cisco Duo).</li>\n    </ul>\n  </li>\n</ul>\n"
  },
  {
    "id": 42,
    "title": "Câu 42: Biện Pháp Chống Tấn Công Layer 2 (Native VLAN / 802.1X / DHCP / DTP)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the mitigation techniques from the left onto the attack types they mitigate on the right.",
    "prompt_vi": "Kéo thả các giải pháp ngăn chặn tấn công từ bên trái vào các loại tấn công tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q42_a.png",
    "answer_image": "images/dnd/dnd_q42_b.png",
    "source_items": [
      {
        "id": "q42-nvlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID"
      },
      {
        "id": "q42-dot1x",
        "text_en": "configure 802.1x authentication"
      },
      {
        "id": "q42-dhcp",
        "text_en": "configure DHCP snooping"
      },
      {
        "id": "q42-dtp",
        "text_en": "disable DTP",
        "text_vi": "disable DTP"
      }
    ],
    "drop_zones": [
      {
        "id": "q42-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "target_ids": [
          "q42-nvlan"
        ]
      },
      {
        "id": "q42-z2",
        "label_en": "MAC flooding attack",
        "target_ids": [
          "q42-dot1x"
        ]
      },
      {
        "id": "q42-z3",
        "label_en": "Man-in-the-middle spoofing attack",
        "target_ids": [
          "q42-dhcp"
        ]
      },
      {
        "id": "q42-z4",
        "label_en": "Switch-spoofing VLAN-hopping attack",
        "target_ids": [
          "q42-dtp"
        ]
      }
    ],
    "explanation": "\n<strong>Các biện pháp phòng thủ tấn công Layer 2:</strong>\n<ul>\n  <li><strong>802.1q double-tagging VLAN-hopping attack</strong> &rarr; <code>configure the native VLAN with a nondefault VLAN ID</code>: Đổi Native VLAN sang VLAN ID riêng biệt không sử dụng (khác VLAN 1) và bật tag Native VLAN trên đường Trunk.</li>\n  <li><strong>MAC flooding attack</strong> &rarr; <code>configure 802.1x authentication</code>: Buộc xác thực danh tính người dùng trước khi cấp quyền kết nối cổng switch (hoặc dùng Port Security giới hạn số lượng MAC).</li>\n  <li><strong>Man-in-the-middle spoofing attack</strong> &rarr; <code>configure DHCP snooping</code>: Ngăn chặn máy chủ DHCP giả mạo phát IP/Gateway sai để nghe lén gói tin.</li>\n  <li><strong>Switch-spoofing VLAN-hopping attack</strong> &rarr; <code>disable DTP (Dynamic Trunking Protocol)</code>: Tắt đàm phán tự động trunking trên access port bằng lệnh <code>switchport nonegotiate</code>.</li>\n</ul>\n"
  },
  {
    "id": 43,
    "title": "Câu 43: Các Thuật Ngữ Cốt Lõi Của Mô Hình AAA & COA",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA terms from the left onto the descriptions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ AAA từ bên trái vào các mô tả chính xác ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q43_a.png",
    "answer_image": "images/dnd/dnd_q43_b.png",
    "source_items": [
      {
        "id": "q43-accounting",
        "text_en": "accounting"
      },
      {
        "id": "q43-coa",
        "text_en": "CoA",
        "text_vi": "CoA"
      },
      {
        "id": "q43-authorization",
        "text_en": "authorization"
      },
      {
        "id": "q43-authentication",
        "text_en": "authentication"
      }
    ],
    "drop_zones": [
      {
        "id": "q43-z-acc",
        "label_en": "tracks activity",
        "target_ids": [
          "q43-accounting"
        ]
      },
      {
        "id": "q43-z-coa",
        "label_en": "regulates session attributes",
        "target_ids": [
          "q43-coa"
        ]
      },
      {
        "id": "q43-z-authz",
        "label_en": "verifies access rights",
        "target_ids": [
          "q43-authorization"
        ]
      },
      {
        "id": "q43-z-authn",
        "label_en": "verifies identity",
        "target_ids": [
          "q43-authentication"
        ]
      }
    ],
    "explanation": "\n<strong>Mô hình AAA và cơ chế COA (Change of Authorization):</strong>\n<ul>\n  <li><code>tracks activity</code> &rarr; <strong>accounting</strong>: Ghi lại toàn bộ lịch sử hoạt động, thời lượng phiên và lượng dữ liệu người dùng đã tiêu thụ.</li>\n  <li><code>regulates session attributes</code> &rarr; <strong>COA (Change of Authorization)</strong>: RFC 5176 cho phép máy chủ AAA (như Cisco ISE) tự động điều chỉnh hoặc thay đổi các thuộc tính, quyền hạn (VLAN, dACL) của một phiên kết nối đang hoạt động theo thời gian thực mà không cần ngắt kết nối người dùng.</li>\n  <li><code>verifies access rights</code> &rarr; <strong>authorization</strong>: Kiểm tra và xác định xem người dùng được phép thực thi các lệnh nào hoặc truy cập những tài nguyên mạng nào.</li>\n  <li><code>verifies identity</code> &rarr; <strong>authentication</strong>: Xác minh danh tính người dùng qua thông tin đăng nhập (Username/Password, Certificate).</li>\n</ul>\n"
  },
  {
    "id": 44,
    "title": "Câu 44: Chi Tiết Hoạt Động Của Dịch Vụ AAA: Accounting & Authorization",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the statements about AAA services from the left onto the AAA services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các nhận định về dịch vụ AAA vào đúng dịch vụ tương ứng ở bên phải. (Lưu ý: Có 2 đáp án gây nhiễu không được sử dụng).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q44_a.png",
    "answer_image": "images/dnd/dnd_q44_b.png",
    "source_items": [
      {
        "id": "q44-autho1",
        "text_en": "It assigns per-user attributes."
      },
      {
        "id": "q44-autho2",
        "text_en": "It restricts the CLI commands that a user is able to perform."
      },
      {
        "id": "q44-auth1",
        "text_en": "It permits and denies login attempts."
      },
      {
        "id": "q44-acc1",
        "text_en": "It records the amount of network resources consumed by the user."
      },
      {
        "id": "q44-auth2",
        "text_en": "It supports local, PPP, RADIUS, and TACACS+ options."
      },
      {
        "id": "q44-acc2",
        "text_en": "It tracks the services the user is using."
      }
    ],
    "drop_zones": [
      {
        "id": "q44-z-acc",
        "label_en": "Accounting",
        "target_ids": [
          "q44-acc1",
          "q44-acc2"
        ]
      },
      {
        "id": "q44-z-autho",
        "label_en": "Authorization",
        "target_ids": [
          "q44-autho1",
          "q44-autho2"
        ]
      }
    ],
    "explanation": "\n<strong>Đối chiếu chuẩn xác giữa Accounting và Authorization (Đề thi dump chỉ có 2 ô đích):</strong>\n<ul>\n  <li><strong>Accounting:</strong>\n    <ul>\n      <li><code>It records the amount of network resources consumed by the user.</code>: Ghi nhận dung lượng băng thông hoặc tài nguyên tiêu thụ.</li>\n      <li><code>It tracks the services the user is using.</code>: Theo dõi loại dịch vụ mạng mà người dùng đang thao tác.</li>\n    </ul>\n  </li>\n  <li><strong>Authorization:</strong>\n    <ul>\n      <li><code>It assigns per-user attributes.</code>: Gán các thuộc tính phân quyền riêng biệt cho từng người dùng (như dACL, VLAN ID).</li>\n      <li><code>It restricts the CLI commands that a user is able to perform.</code>: Giới hạn tập lệnh CLI mà tài khoản được phép nhập trên thiết bị.</li>\n    </ul>\n  </li>\n  <li><em>Thẻ gây nhiễu (Distractor - Thuộc về Authentication nên không dùng):</em>\n    <ul>\n      <li><code>It permits and denies login attempts.</code> (Cho phép hoặc từ chối đăng nhập).</li>\n      <li><code>It supports local, PPP, RADIUS, and TACACS+ options.</code> (Hỗ trợ xác thực qua các phương thức cơ sở).</li>\n    </ul>\n  </li>\n</ul>\n"
  },
  {
    "id": 45,
    "title": "Câu 45: Thứ Tự Cấu Hình Tính Năng Port Security Trên Switch",
    "category": "Security Fundamentals",
    "prompt_en": "An engineer is tasked to configure a switch with port security to ensure devices that forward unicasts, multicasts, and broadcasts are unable to flood the port. The port must be configured to permit only two random MAC addresses at a time. Drag and drop the required configuration commands from the left onto the sequence on the right. Not all commands are used.",
    "prompt_vi": "Kỹ sư được yêu cầu cấu hình Port Security trên cổng switch để chỉ cho phép tối đa 2 địa chỉ MAC bất kỳ. Kéo thả các lệnh cấu hình theo đúng trình tự thực thi.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q45_a.png",
    "answer_image": "images/dnd/dnd_q45_b.png",
    "source_items": [
      {
        "id": "q45-cmd1",
        "text_en": "switchport mode access"
      },
      {
        "id": "q45-cmd2",
        "text_en": "switchport port-security"
      },
      {
        "id": "q45-cmd3",
        "text_en": "switchport port-security maximum 2"
      },
      {
        "id": "q45-cmd4",
        "text_en": "switchport port-security violation shutdown"
      },
      {
        "id": "q45-d1",
        "text_en": "switchport port-security mac-address 0060.30D.77AB"
      },
      {
        "id": "q45-d2",
        "text_en": "switchport port-security mac-address 00D0.D3ED.623A"
      },
      {
        "id": "q45-d3",
        "text_en": "switchport port-security mac-address sticky"
      }
    ],
    "drop_zones": [
      {
        "id": "q45-s1",
        "label_en": "Step 1",
        "target_ids": [
          "q45-cmd1"
        ]
      },
      {
        "id": "q45-s2",
        "label_en": "Step 2",
        "target_ids": [
          "q45-cmd2"
        ]
      },
      {
        "id": "q45-s3",
        "label_en": "Step 3",
        "target_ids": [
          "q45-cmd3"
        ]
      },
      {
        "id": "q45-s4",
        "label_en": "Step 4",
        "target_ids": [
          "q45-cmd4"
        ]
      }
    ],
    "explanation": "\n<strong>Trình tự cấu hình Port Security chuẩn Cisco IOS:</strong>\n<ol>\n  <li><strong>Step 1:</strong> <code>switchport mode access</code>: Cổng phải ở chế độ Access tĩnh trước khi có thể kích hoạt Port Security.</li>\n  <li><strong>Step 2:</strong> <code>switchport port-security</code>: Bật tính năng Port Security trên cổng.</li>\n  <li><strong>Step 3:</strong> <code>switchport port-security maximum 2</code>: Giới hạn số lượng MAC tối đa là 2 theo đúng đề bài (\"two random MAC addresses at a time\").</li>\n  <li><strong>Step 4:</strong> <code>switchport port-security violation shutdown</code>: Đặt chế độ xử lý vi phạm đưa cổng vào trạng thái err-disabled.</li>\n</ol>\n<em>Các thẻ gây nhiễu:</em> Đề bài yêu cầu cho phép 2 địa chỉ MAC ngẫu nhiên bất kỳ (random), do đó không cấu hình MAC tĩnh hay sticky MAC.\n"
  },
  {
    "id": 46,
    "title": "Câu 46: Đối Chiếu Nhận Định AAA: Authentication vs Authorization",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the statements about AAA services from the left to the corresponding AAA services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các nhận định về dịch vụ AAA vào đúng dịch vụ tương ứng ở bên phải. (Lưu ý: Có 2 đáp án gây nhiễu không được sử dụng).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q46_a.png",
    "answer_image": "images/dnd/dnd_q46_b.png",
    "source_items": [
      {
        "id": "q46-autho1",
        "text_en": "It grants access to network assets, such as FTP servers."
      },
      {
        "id": "q46-autho2",
        "text_en": "It restricts the CLI commands that a user is able to perform."
      },
      {
        "id": "q46-auth1",
        "text_en": "It performs user validation via TACACS+."
      },
      {
        "id": "q46-acc1",
        "text_en": "It records the duration of each connection."
      },
      {
        "id": "q46-acc2",
        "text_en": "It supports User Access Reporting."
      },
      {
        "id": "q46-auth2",
        "text_en": "It verifies 'who you are'."
      }
    ],
    "drop_zones": [
      {
        "id": "q46-z-authn",
        "label_en": "Authentication",
        "target_ids": [
          "q46-auth1",
          "q46-auth2"
        ]
      },
      {
        "id": "q46-z-authz",
        "label_en": "Authorization",
        "target_ids": [
          "q46-autho1",
          "q46-autho2"
        ]
      }
    ],
    "explanation": "\n<strong>Phân biệt chức năng giữa Authentication và Authorization (Đề thi dump chỉ có 2 ô đích):</strong>\n<ul>\n  <li><strong>Authentication (Xác thực danh tính):</strong>\n    <ul>\n      <li><code>It performs user validation via TACACS+.</code>: Xác minh thông tin tài khoản qua máy chủ TACACS+.</li>\n      <li><code>It verifies 'who you are'.</code>: Kiểm tra \"bạn là ai\" thông qua tài khoản và mật khẩu.</li>\n    </ul>\n  </li>\n  <li><strong>Authorization (Cấp quyền truy cập):</strong>\n    <ul>\n      <li><code>It grants access to network assets, such as FTP servers.</code>: Cấp quyền truy cập vào các tài nguyên/máy chủ mạng cụ thể.</li>\n      <li><code>It restricts the CLI commands that a user is able to perform.</code>: Giới hạn các câu lệnh CLI mà người dùng được phép thực thi.</li>\n    </ul>\n  </li>\n  <li><em>Thẻ gây nhiễu (Distractor - Thuộc về Accounting):</em>\n    <ul>\n      <li><code>It records the duration of each connection.</code> (Ghi lại thời lượng của mỗi kết nối).</li>\n      <li><code>It supports User Access Reporting.</code> (Hỗ trợ báo cáo truy cập người dùng).</li>\n    </ul>\n  </li>\n</ul>\n"
  },
  {
    "id": 47,
    "title": "Câu 47: Phân Bổ Lưu Lượng Mạng Vào Cơ Chế QoS Delivery Phù Hợp",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the traffic types from the left onto the QoS delivery mechanisms on the right.",
    "prompt_vi": "Kéo thả các loại lưu lượng mạng từ bên trái vào đúng cơ chế vận chuyển QoS tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q47_a.png",
    "answer_image": "images/dnd/dnd_q47_b.png",
    "source_items": [
      {
        "id": "q47-db",
        "text_en": "database synchronization traffic"
      },
      {
        "id": "q47-web",
        "text_en": "standard web browsing traffic"
      },
      {
        "id": "q47-vid",
        "text_en": "video traffic"
      },
      {
        "id": "q47-voip",
        "text_en": "VoIP traffic"
      }
    ],
    "drop_zones": [
      {
        "id": "q47-z-be",
        "label_en": "Best Effort",
        "target_ids": [
          "q47-web"
        ]
      },
      {
        "id": "q47-z-pol",
        "label_en": "Policing",
        "target_ids": [
          "q47-vid"
        ]
      },
      {
        "id": "q47-z-pq",
        "label_en": "Priority Queue",
        "target_ids": [
          "q47-voip"
        ]
      },
      {
        "id": "q47-z-shp",
        "label_en": "Shaping",
        "target_ids": [
          "q47-db"
        ]
      }
    ],
    "explanation": "\n<strong>Phân bổ lưu lượng mạng vào các cơ chế QoS theo chuẩn Cisco:</strong>\n<ul>\n  <li><strong>Best Effort</strong> &rarr; <code>standard web browsing traffic</code>: Lưu lượng duyệt web thông thường (HTTP/HTTPS) không yêu cầu cam kết chất lượng dịch vụ đặc thù, truyền theo mặc định \"nỗ lực tối đa\".</li>\n  <li><strong>Policing</strong> &rarr; <code>video traffic</code>: Áp dụng giám sát tốc độ nghiêm ngặt, loại bỏ (drop) hoặc đánh dấu lại (remark) các gói video vượt ngưỡng băng thông để tránh chiếm dụng toàn bộ đường truyền.</li>\n  <li><strong>Priority Queue (LLQ)</strong> &rarr; <code>VoIP traffic</code>: Lưu lượng thoại (VoIP) cực kỳ nhạy cảm với độ trễ (delay) và biến thiên trễ (jitter), do đó bắt buộc phải đưa vào hàng đợi ưu tiên nghiêm ngặt để truyền đi trước tiên.</li>\n  <li><strong>Shaping</strong> &rarr; <code>database synchronization traffic</code>: Đồng bộ cơ sở dữ liệu có tính chất đột biến (bursty) nhưng có thể chịu được độ trễ nhỏ; kỹ thuật Shaping sử dụng bộ đệm (buffer) để dàn đều tốc độ gói tin mà không làm rớt gói.</li>\n</ul>\n"
  },
  {
    "id": 48,
    "title": "Câu 48: Cấu Hình Mật Khẩu Mã Hóa Cho Lệnh Enable Trên Router",
    "category": "Security Fundamentals",
    "prompt_en": "An engineer is configuring an encrypted password for the enable command on a router where the local user database has already been configured. Drag and drop the configuration commands from the left into the correct sequence on the right. Not all commands are used.",
    "prompt_vi": "Kỹ sư đang cấu hình mật khẩu mã hóa cho lệnh enable trên router nơi cơ sở dữ liệu người dùng cục bộ đã sẵn sàng. Kéo thả các lệnh từ bên trái vào đúng thứ tự thực hiện ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q48_a.png",
    "answer_image": "images/dnd/dnd_q48_b.png",
    "source_items": [
      {
        "id": "q48-en",
        "text_en": "enable"
      },
      {
        "id": "q48-conf",
        "text_en": "configure terminal"
      },
      {
        "id": "q48-sec",
        "text_en": "enable secret shfl@4fs"
      },
      {
        "id": "q48-ex",
        "text_en": "exit"
      },
      {
        "id": "q48-d1",
        "text_en": "line vty 0 4"
      },
      {
        "id": "q48-d2",
        "text_en": "service password-encryption"
      }
    ],
    "drop_zones": [
      {
        "id": "q48-s1",
        "label_en": "first",
        "label_vi": "first",
        "target_ids": [
          "q48-en"
        ]
      },
      {
        "id": "q48-s2",
        "label_en": "second",
        "label_vi": "second",
        "target_ids": [
          "q48-conf"
        ]
      },
      {
        "id": "q48-s3",
        "label_en": "third",
        "label_vi": "third",
        "target_ids": [
          "q48-sec"
        ]
      },
      {
        "id": "q48-s4",
        "label_en": "fourth",
        "label_vi": "fourth",
        "target_ids": [
          "q48-ex"
        ]
      }
    ],
    "explanation": "\n<strong>Trình tự thực thi lệnh Cisco IOS chính xác:</strong>\n<ol>\n  <li><strong>First:</strong> <code>enable</code>: Chuyển từ User EXEC Mode sang Privileged EXEC Mode.</li>\n  <li><strong>Second:</strong> <code>configure terminal</code>: Vào Global Configuration Mode để cấu hình hệ thống.</li>\n  <li><strong>Third:</strong> <code>enable secret shfl@4fs</code>: Cấu hình mật khẩu bí mật mã hóa mạnh cho quyền Privileged EXEC.</li>\n  <li><strong>Fourth:</strong> <code>exit</code>: Thoát khỏi Global Configuration Mode trở về EXEC.</li>\n</ol>\n<em>Các thẻ gây nhiễu:</em> <code>line vty 0 4</code> (dùng cho Telnet/SSH) và <code>service password-encryption</code> (mã hóa type 7 yếu cho clear-text passwords, trong khi <code>enable secret</code> đã tự động băm mã hóa mạnh bằng MD5/SHA-256).\n"
  },
  {
    "id": 49,
    "title": "Câu 49: Trình Tự Các Bước Truy Vấn DNS Tiêu Chuẩn (DNS Lookup)",
    "category": "IP Services",
    "prompt_en": "Drag and drop the steps in a standard DNS lookup operation from the left into order on the right.",
    "prompt_vi": "Kéo thả các bước trong quá trình phân giải tên miền DNS tiêu chuẩn từ bên trái vào đúng thứ tự ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q49_a.png",
    "answer_image": "images/dnd/dnd_q49_b.png",
    "source_items": [
      {
        "id": "q49-step1",
        "text_en": "An endpoint submits a request for the IP address of a domain name."
      },
      {
        "id": "q49-step2",
        "text_en": "The DNS server submits a request to a root DNS server."
      },
      {
        "id": "q49-step3",
        "text_en": "The DNS server submits a request to the domain DNS server."
      },
      {
        "id": "q49-step4",
        "text_en": "The DNS server receives a reply from the domain DNS server."
      },
      {
        "id": "q49-step5",
        "text_en": "The DNS server responds to the endpoint."
      }
    ],
    "drop_zones": [
      {
        "id": "q49-z1",
        "label_en": "Step 1",
        "target_ids": [
          "q49-step1"
        ]
      },
      {
        "id": "q49-z2",
        "label_en": "Step 2",
        "target_ids": [
          "q49-step2"
        ]
      },
      {
        "id": "q49-z3",
        "label_en": "Step 3",
        "target_ids": [
          "q49-step3"
        ]
      },
      {
        "id": "q49-z4",
        "label_en": "Step 4",
        "target_ids": [
          "q49-step4"
        ]
      },
      {
        "id": "q49-z5",
        "label_en": "Step 5",
        "target_ids": [
          "q49-step5"
        ]
      }
    ],
    "explanation": "\n<strong>Trình tự truy vấn DNS phân giải đệ quy (Iterative / Recursive Lookup):</strong>\n<ol>\n  <li><strong>Step 1:</strong> <code>An endpoint submits a request for the IP address of a domain name.</code>: Thiết bị đầu cuối gửi yêu cầu truy vấn IP của tên miền đến DNS Resolver cục bộ.</li>\n  <li><strong>Step 2:</strong> <code>The DNS server submits a request to a root DNS server.</code>: DNS server chuyển tiếp yêu cầu lên máy chủ gốc (Root DNS Server) để tìm máy chủ TLD (.com, .net,...).</li>\n  <li><strong>Step 3:</strong> <code>The DNS server submits a request to the domain DNS server.</code>: DNS server gửi yêu cầu tới máy chủ DNS có thẩm quyền quản lý tên miền (Authoritative Name Server).</li>\n  <li><strong>Step 4:</strong> <code>The DNS server receives a reply from the domain DNS server.</code>: DNS server nhận phản hồi chứa bản ghi IP chính xác từ Authoritative Name Server.</li>\n  <li><strong>Step 5:</strong> <code>The DNS server responds to the endpoint.</code>: DNS server trả kết quả địa chỉ IP về cho thiết bị đầu cuối bắt đầu phiên kết nối.</li>\n</ol>\n"
  },
  {
    "id": 50,
    "title": "Câu 50: So Sánh Giao Thức Bảo Mật AAA: RADIUS vs TACACS+",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the functions of AAA supporting protocols from the left onto the protocols on the right.",
    "prompt_vi": "Kéo thả các đặc trưng của các giao thức hỗ trợ AAA từ bên trái vào giao thức tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q50_a.png",
    "answer_image": "images/dnd/dnd_q50_b.png",
    "source_items": [
      {
        "id": "q50-r-pwd",
        "text_en": "encrypts only the password when it sends an access request"
      },
      {
        "id": "q50-r-comb",
        "text_en": "combines authentication and authorization"
      },
      {
        "id": "q50-r-udp",
        "text_en": "uses UDP"
      },
      {
        "id": "q50-t-body",
        "text_en": "encrypts the entire body of the access-request packet"
      },
      {
        "id": "q50-t-sep",
        "text_en": "separates all three AAA operations"
      },
      {
        "id": "q50-t-tcp",
        "text_en": "uses TCP"
      }
    ],
    "drop_zones": [
      {
        "id": "q50-radius",
        "label_en": "RADIUS",
        "target_ids": [
          "q50-r-pwd",
          "q50-r-comb",
          "q50-r-udp"
        ]
      },
      {
        "id": "q50-tacacs",
        "label_en": "TACACS+",
        "target_ids": [
          "q50-t-body",
          "q50-t-sep",
          "q50-t-tcp"
        ]
      }
    ],
    "explanation": "\n<strong>So sánh toàn diện RADIUS vs TACACS+:</strong>\n<ul>\n  <li><strong>RADIUS (IETF Standard):</strong>\n    <ul>\n      <li><code>encrypts only the password when it sends an access request</code>: Chỉ mã hóa trường mật khẩu, phần thân gói tin còn lại để lộ dạng cleartext.</li>\n      <li><code>combines authentication and authorization</code>: Gộp chung quá trình xác thực và cấp quyền vào làm một.</li>\n      <li><code>uses UDP</code>: Chạy trên giao thức truyền tải UDP (cổng 1812/1813 hoặc 1645/1646).</li>\n    </ul>\n  </li>\n  <li><strong>TACACS+ (Cisco Proprietary):</strong>\n    <ul>\n      <li><code>encrypts the entire body of the access-request packet</code>: Mã hóa toàn bộ phần thân (payload) của gói tin, chỉ để header lộ diện để định tuyến.</li>\n      <li><code>separates all three AAA operations</code>: Tách biệt hoàn toàn 3 thành phần Authentication, Authorization và Accounting giúp quản trị phân quyền linh hoạt theo từng lệnh CLI.</li>\n      <li><code>uses TCP</code>: Chạy trên kết nối hướng tin cậy TCP cổng 49.</li>\n    </ul>\n  </li>\n</ul>\n"
  },
  {
    "id": 51,
    "title": "Câu 51: Phòng Chống Tấn Công Layer 2 Nâng Cao (Double-Tagging / Switch-Spoofing / MITM)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.",
    "prompt_vi": "Kéo thả các biện pháp phòng chống tấn công từ bên trái vào đúng các loại tấn công tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q51_a.png",
    "answer_image": "images/dnd/dnd_q51_b.png",
    "source_items": [
      {
        "id": "q51-m-dtp",
        "text_en": "disable the Dynamic Trunking Protocol",
        "text_vi": "disable the Dynamic Trunking Protocol"
      },
      {
        "id": "q51-m-dhcp",
        "text_en": "configure the DHCP snooping feature",
        "text_vi": "configure the DHCP snooping feature"
      },
      {
        "id": "q51-m-vlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID",
        "text_vi": "configure the native VLAN with a nondefault VLAN ID"
      }
    ],
    "drop_zones": [
      {
        "id": "q51-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "label_vi": "802.1q double-tagging VLAN-hopping attack",
        "target_ids": [
          "q51-m-vlan"
        ]
      },
      {
        "id": "q51-z2",
        "label_en": "switch-spoofing VLAN-hopping attack",
        "label_vi": "switch-spoofing VLAN-hopping attack",
        "target_ids": [
          "q51-m-dtp"
        ]
      },
      {
        "id": "q51-z3",
        "label_en": "man-in-the-middle spoofing attack",
        "label_vi": "man-in-the-middle spoofing attack",
        "target_ids": [
          "q51-m-dhcp"
        ]
      }
    ],
    "explanation": "Đối chiếu chính xác 3 kỹ thuật giảm thiểu tấn công Layer 2 (khớp 1:1 theo đề thi, không có mồi nhử):\n- **802.1q double-tagging VLAN-hopping attack** -> `configure the native VLAN with a nondefault VLAN ID`: Đổi Native VLAN sang một VLAN riêng biệt (không dùng VLAN 1 mặc định) và gắn tag Native VLAN để switch drop các gói tin gắn 2 thẻ tag.\n- **switch-spoofing VLAN-hopping attack** -> `disable the Dynamic Trunking Protocol`: Tắt giao thức DTP trên cổng access (bằng `switchport nonegotiate` hoặc đặt cố định `switchport mode access`) để ngăn chặn thiết bị giả làm switch thiết lập Trunk.\n- **man-in-the-middle spoofing attack** -> `configure the DHCP snooping feature`: Cấu hình tính năng DHCP Snooping để chỉ tin cậy DHCP Offer từ cổng kết nối DHCP Server chính chủ, chống giả mạo DHCP/Default Gateway."
  },
  {
    "id": 52,
    "title": "Câu 52: Phòng Chống Tấn Công Layer 2 Nâng Cao (Biến Thể Đầy Đủ Tên Giao Thức)",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.",
    "prompt_vi": "Kéo thả các giải pháp phòng thủ từ bên trái vào các loại tấn công tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q52_a.png",
    "answer_image": "images/dnd/dnd_q52_b.png",
    "source_items": [
      {
        "id": "q52-m-vlan",
        "text_en": "configure the native VLAN with a nondefault VLAN ID"
      },
      {
        "id": "q52-m-dtp",
        "text_en": "disable Dynamic Trunking Protocol (DTP)"
      },
      {
        "id": "q52-m-dhcp",
        "text_en": "configure DHCP snooping"
      }
    ],
    "drop_zones": [
      {
        "id": "q52-z1",
        "label_en": "802.1q double-tagging VLAN-hopping attack",
        "target_ids": [
          "q52-m-vlan"
        ]
      },
      {
        "id": "q52-z2",
        "label_en": "switch-spoofing VLAN-hopping attack",
        "target_ids": [
          "q52-m-dtp"
        ]
      },
      {
        "id": "q52-z3",
        "label_en": "man-in-the-middle spoofing attack",
        "target_ids": [
          "q52-m-dhcp"
        ]
      }
    ],
    "explanation": "\n<strong>Phòng chống tấn công Layer 2 (Biến thể câu 52):</strong>\n<ul>\n  <li><code>802.1q double-tagging VLAN-hopping attack</code> &rarr; <strong>configure the native VLAN with a nondefault VLAN ID</strong></li>\n  <li><code>switch-spoofing VLAN-hopping attack</code> &rarr; <strong>disable Dynamic Trunking Protocol (DTP)</strong></li>\n  <li><code>man-in-the-middle spoofing attack</code> &rarr; <strong>configure DHCP snooping</strong></li>\n</ul>\n"
  },
  {
    "id": 53,
    "title": "Câu 53: Phân Định Tính Năng Bảo Mật AAA: Authentication vs Authorization",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA features from the left onto the corresponding AAA security services on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các tính năng AAA từ bên trái vào đúng dịch vụ bảo mật AAA tương ứng ở bên phải. Không phải tất cả các tùy chọn đều được sử dụng.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q53_a.png",
    "answer_image": "images/dnd/dnd_q53_b.png",
    "source_items": [
      {
        "id": "q53-authz1",
        "text_en": "It determines what resources or commands a user or group can access.",
        "text_vi": "It determines what resources or commands a user or group can access."
      },
      {
        "id": "q53-authn1",
        "text_en": "It uses a RADIUS server to allow user access.",
        "text_vi": "It uses a RADIUS server to allow user access."
      },
      {
        "id": "q53-authz2",
        "text_en": "It limits which CLI commands a user can use.",
        "text_vi": "It limits which CLI commands a user can use."
      },
      {
        "id": "q53-d1",
        "text_en": "It logs the commands entered by an administrator.",
        "text_vi": "It logs the commands entered by an administrator."
      },
      {
        "id": "q53-authn2",
        "text_en": "It verifies the user before granting access to the device.",
        "text_vi": "It verifies the user before granting access to the device."
      }
    ],
    "drop_zones": [
      {
        "id": "q53-z-authn",
        "label_en": "Authentication",
        "label_vi": "Authentication",
        "target_ids": [
          "q53-authn1",
          "q53-authn2"
        ]
      },
      {
        "id": "q53-z-authz",
        "label_en": "Authorization",
        "label_vi": "Authorization",
        "target_ids": [
          "q53-authz1",
          "q53-authz2"
        ]
      }
    ],
    "explanation": "Phân biệt các thành phần trong mô hình AAA (Authentication, Authorization, Accounting):\n- **Authentication (Xác thực - Bạn là ai?):**\n  + `It uses a RADIUS server to allow user access.`: Sử dụng máy chủ RADIUS để xác minh danh tính người dùng khi truy cập vào hệ thống.\n  + `It verifies the user before granting access to the device.`: Xác minh thông tin tài khoản (username/password) trước khi cho phép đăng nhập vào thiết bị.\n- **Authorization (Ủy quyền / Phân quyền - Bạn được phép làm gì?):**\n  + `It determines what resources or commands a user or group can access.`: Xác định tài nguyên hoặc tập lệnh mà người dùng/nhóm được phép truy cập.\n  + `It limits which CLI commands a user can use.`: Giới hạn các câu lệnh CLI cụ thể mà người dùng có quyền thực thi.\n*Mồi nhử (Distractor - Không sử dụng):*\n  + `It logs the commands entered by an administrator.`: Đây là chức năng của **Accounting** (Ghi nhật ký/Kiểm toán), do đề bài chỉ có 2 ô là Authentication và Authorization nên tính năng này bị loại bỏ."
  },
  {
    "id": 54,
    "title": "Câu 54: Đặc Trưng Của Công Cụ Tự Động Hóa Ansible",
    "category": "Network Automation",
    "prompt_en": "Drag and drop the Ansible features from the left to right. Not all features are used.",
    "prompt_vi": "Kéo thả các đặc trưng của công cụ tự động hóa Ansible từ bên trái sang bên phải. (Lưu ý: Có 1 tính năng gây nhiễu).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q54_a.png",
    "answer_image": "images/dnd/dnd_q54_b.png",
    "source_items": [
      {
        "id": "q54-f1",
        "text_en": "executes modules via SSH by default"
      },
      {
        "id": "q54-f2",
        "text_en": "uses the YAML language"
      },
      {
        "id": "q54-f3",
        "text_en": "operates without agents"
      },
      {
        "id": "q54-d1",
        "text_en": "uses agents to manage hosts"
      }
    ],
    "drop_zones": [
      {
        "id": "q54-zone",
        "label_en": "Ansible Features",
        "target_ids": [
          "q54-f1",
          "q54-f2",
          "q54-f3"
        ]
      }
    ],
    "explanation": "\n<strong>Các đặc trưng cốt lõi của Ansible:</strong>\n<ul>\n  <li><code>executes modules via SSH by default</code>: Ansible sử dụng giao thức SSH tiêu chuẩn để kết nối và thực thi các mô-đun trên thiết bị đích (hoặc NETCONF/RESTCONF).</li>\n  <li><code>uses the YAML language</code>: Các playbook kịch bản tự động hóa của Ansible được viết bằng định dạng YAML trực quan, dễ đọc.</li>\n  <li><code>operates without agents</code>: Kiến trúc không cần cài đặt phần mềm đại lý (Agentless) trên các máy chủ/switch được quản lý.</li>\n  <li><em>Thẻ gây nhiễu:</em> <code>uses agents to manage hosts</code> (Đây là đặc trưng của Puppet và Chef, không phải của Ansible).</li>\n</ul>\n"
  },
  {
    "id": 55,
    "title": "Câu 55: Đối Chiếu Thuật Ngữ AAA Với Hành Động",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the AAA terms from the left onto the descriptions on the right.",
    "prompt_vi": "Kéo thả các thuật ngữ AAA từ bên trái vào đúng mô tả hành động ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q55_a.png",
    "answer_image": "images/dnd/dnd_q55_b.png",
    "source_items": [
      {
        "id": "q55-accounting",
        "text_en": "accounting"
      },
      {
        "id": "q55-authorization",
        "text_en": "authorization"
      },
      {
        "id": "q55-authentication",
        "text_en": "authentication"
      }
    ],
    "drop_zones": [
      {
        "id": "q55-z-acc",
        "label_en": "tracks activity",
        "target_ids": [
          "q55-accounting"
        ]
      },
      {
        "id": "q55-z-authz",
        "label_en": "verifies access rights",
        "target_ids": [
          "q55-authorization"
        ]
      },
      {
        "id": "q55-z-authn",
        "label_en": "verifies identity",
        "target_ids": [
          "q55-authentication"
        ]
      }
    ],
    "explanation": "\n<strong>Mô hình AAA cổ điển:</strong>\n<ul>\n  <li><code>tracks activity</code> &rarr; <strong>accounting</strong>: Theo dõi và ghi nhật ký hoạt động.</li>\n  <li><code>verifies access rights</code> &rarr; <strong>authorization</strong>: Kiểm tra và cấp quyền truy cập tài nguyên.</li>\n  <li><code>verifies identity</code> &rarr; <strong>authentication</strong>: Xác minh danh tính người dùng đăng nhập.</li>\n</ul>\n"
  },
  {
    "id": 56,
    "title": "Câu 56: Điểm Truy Cập Không Dây (AP) vs Bộ Điều Khiển (WLC)",
    "category": "Network Access",
    "prompt_en": "Drag and drop the characteristics from the left onto corresponding device types on the right. Not all characteristics are used.",
    "prompt_vi": "Kéo thả các đặc điểm từ bên trái vào đúng loại thiết bị mạng không dây ở bên phải. (Lưu ý: Có 1 đáp án gây nhiễu).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q56_a.png",
    "answer_image": "images/dnd/dnd_q56_b.png",
    "source_items": [
      {
        "id": "q56-ap-radio",
        "text_en": "transmits and receives radio signals"
      },
      {
        "id": "q56-ap-wgb",
        "text_en": "configurable as a workgroup bridge"
      },
      {
        "id": "q56-wlc-qos",
        "text_en": "uses templates to implement QOS configuration"
      },
      {
        "id": "q56-wlc-conn",
        "text_en": "supplies user connection data within a device group"
      },
      {
        "id": "q56-poe",
        "text_en": "requires a special adapter for POE"
      }
    ],
    "drop_zones": [
      {
        "id": "q56-z-ap",
        "label_en": "Access Point",
        "target_ids": [
          "q56-ap-radio",
          "q56-ap-wgb"
        ]
      },
      {
        "id": "q56-z-wlc",
        "label_en": "Wireless LAN Controller",
        "target_ids": [
          "q56-wlc-qos",
          "q56-wlc-conn"
        ]
      }
    ],
    "explanation": "\n<strong>Phân biệt Access Point vs Wireless LAN Controller (Khớp 100% ảnh dump gốc):</strong>\n<ul>\n  <li><strong>Access Point:</strong>\n    <ul>\n      <li><code>transmits and receives radio signals</code>: Phát sóng và thu nhận trực tiếp tín hiệu sóng radio (RF).</li>\n      <li><code>configurable as a workgroup bridge</code>: Có thể hoạt động ở chế độ Workgroup Bridge (WGB) kết nối các thiết bị có dây vào mạng Wi-Fi.</li>\n    </ul>\n  </li>\n  <li><strong>Wireless LAN Controller (WLC):</strong>\n    <ul>\n      <li><code>uses templates to implement QOS configuration</code>: Sử dụng các template cấu hình tập trung để triển khai QoS đồng bộ cho hàng loạt AP.</li>\n      <li><code>supplies user connection data within a device group</code>: Cung cấp và chia sẻ dữ liệu chuyển vùng/kết nối của người dùng giữa các AP trong cùng một mobility group.</li>\n    </ul>\n  </li>\n  <li><em>Thẻ gây nhiễu (Distractor):</em> <code>requires a special adapter for POE</code> (Các AP doanh nghiệp hiện đại hỗ trợ chuẩn cấp nguồn 802.3af/at trực tiếp từ cổng switch PoE mà không cần adapter đặc biệt).</li>\n</ul>\n"
  },
  {
    "id": 57,
    "title": "Câu 57: So Sánh Cáp Xoắn Đôi vs Cáp Sợi Quang Đơn Mốt",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the characteristic from the left onto cable type on the right.",
    "prompt_vi": "Kéo thả các đặc tính từ bên trái vào loại cáp truyền dẫn tương ứng ở bên phải.",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q57_a.png",
    "answer_image": "images/dnd/dnd_q57_b.png",
    "source_items": [
      {
        "id": "q57-tp1",
        "text_en": "comprised of shielded and unshielded twisted pairs"
      },
      {
        "id": "q57-tp2",
        "text_en": "is affected by electrical and magnetic interference"
      },
      {
        "id": "q57-sm1",
        "text_en": "comprised of insulated glass strands"
      },
      {
        "id": "q57-sm2",
        "text_en": "uses a single wavelength of light"
      }
    ],
    "drop_zones": [
      {
        "id": "q57-twisted",
        "label_en": "copper",
        "label_vi": "copper",
        "target_ids": [
          "q57-tp1",
          "q57-tp2"
        ]
      },
      {
        "id": "q57-smf",
        "label_en": "single-mode fiber",
        "label_vi": "single-mode fiber",
        "target_ids": [
          "q57-sm1",
          "q57-sm2"
        ]
      }
    ],
    "explanation": "\n<strong>Đặc tính cáp mạng truyền dẫn:</strong>\n<ul>\n  <li><strong>Twisted-Pair Cabling (Cáp xoắn đôi đồng):</strong>\n    <ul>\n      <li><code>comprised of shielded and unshielded twisted pairs</code>: Gồm các cặp dây đồng xoắn chống nhiễu (STP) hoặc không chống nhiễu (UTP).</li>\n      <li><code>is affected by electrical and magnetic interference</code>: Dễ bị suy hao và ảnh hưởng bởi nhiễu điện từ trường (EMI/RFI).</li>\n    </ul>\n  </li>\n  <li><strong>Single-Mode Fiber (Cáp sợi quang đơn mốt SMF):</strong>\n    <ul>\n      <li><code>comprised of insulated glass strands</code>: Cấu tạo từ các sợi thủy tinh silica tinh khiết cách điện.</li>\n      <li><code>uses a single wavelength of light</code>: Sử dụng tia laser với một bước sóng ánh sáng duy nhất truyền xuyên suốt lõi quang hẹp (9 micromet) cho khoảng cách rất xa.</li>\n    </ul>\n  </li>\n</ul>\n"
  },
  {
    "id": 58,
    "title": "Câu 58: Ưu Điểm Của Giao Thức Tầng Transport: TCP vs UDP",
    "category": "Network Fundamentals",
    "prompt_en": "Drag and drop the protocol advantages from the left onto the protocol types on the right. Not all options are used.",
    "prompt_vi": "Kéo thả ưu điểm giao thức từ bên trái vào đúng loại giao thức truyền tải ở bên phải. (Lưu ý: Có 1 đáp án gây nhiễu).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q58_a.png",
    "answer_image": "images/dnd/dnd_q58_b.png",
    "source_items": [
      {
        "id": "q58-t1",
        "text_en": "optimizes transmission rates to receiver"
      },
      {
        "id": "q58-t2",
        "text_en": "controls connections between sender and receiver"
      },
      {
        "id": "q58-t3",
        "text_en": "guarantees packet delivery"
      },
      {
        "id": "q58-u1",
        "text_en": "capable of sending multicast transmissions"
      },
      {
        "id": "q58-u2",
        "text_en": "transmits live and real-time data"
      },
      {
        "id": "q58-d1",
        "text_en": "uses stateful packet inspection"
      }
    ],
    "drop_zones": [
      {
        "id": "q58-tcp",
        "label_en": "TCP",
        "target_ids": [
          "q58-t1",
          "q58-t2",
          "q58-t3"
        ]
      },
      {
        "id": "q58-udp",
        "label_en": "UDP",
        "target_ids": [
          "q58-u1",
          "q58-u2"
        ]
      }
    ],
    "explanation": "\n<strong>Ưu điểm của TCP vs UDP:</strong>\n<ul>\n  <li><strong>TCP (Transmission Control Protocol):</strong>\n    <ul>\n      <li><code>optimizes transmission rates to receiver</code>: Điều khiển lưu lượng (Flow Control) qua cơ chế Windows Size tránh quá tải bên nhận.</li>\n      <li><code>controls connections between sender and receiver</code>: Thiết lập và quản lý phiên kết nối chặt chẽ (bắt tay 3 bước 3-Way Handshake).</li>\n      <li><code>guarantees packet delivery</code>: Cam kết truyền dữ liệu tin cậy thông qua số hiệu ACK và cơ chế truyền lại khi mất gói.</li>\n    </ul>\n  </li>\n  <li><strong>UDP (User Datagram Protocol):</strong>\n    <ul>\n      <li><code>capable of sending multicast transmissions</code>: Hỗ trợ truyền phát Multicast/Broadcast (TCP là giao thức Unicast 1-1).</li>\n      <li><code>transmits live and real-time data</code>: Không có độ trễ bắt tay hay truyền lại, tối ưu truyền dữ liệu thời gian thực (VoIP, video trực tiếp).</li>\n    </ul>\n  </li>\n  <li><em>Thẻ gây nhiễu:</em> <code>uses stateful packet inspection</code> (Đây là tính năng bảo mật của tường lửa Stateful Firewall, không phải đặc tính tầng Transport).</li>\n</ul>\n"
  },
  {
    "id": 59,
    "title": "Câu 59: Đối Chiếu Tính Năng Xác Thực: Biometrics vs Certificates",
    "category": "Security Fundamentals",
    "prompt_en": "Drag and drop the descriptions of security features from the left onto the corresponding features on the right. Not all options are used.",
    "prompt_vi": "Kéo thả các mô tả đặc điểm bảo mật từ bên trái vào tính năng bảo mật tương ứng ở bên phải. (Lưu ý: Có 1 đáp án gây nhiễu không được sử dụng).",
    "has_exhibit": false,
    "exhibit_image": null,
    "question_image": "images/dnd/dnd_q59_a.png",
    "answer_image": "images/dnd/dnd_q59_b.png",
    "source_items": [
      {
        "id": "q59-bio1",
        "text_en": "may use a fingerprint reader to authenticate users"
      },
      {
        "id": "q59-bio2",
        "text_en": "relies on a 'something you are' paradigm"
      },
      {
        "id": "q59-cert1",
        "text_en": "supports enterprise, third party, and public options"
      },
      {
        "id": "q59-cert2",
        "text_en": "issuer may revoke the digital credentials"
      },
      {
        "id": "q59-mfa",
        "text_en": "requires two or more authentication methods to verify a user's identity"
      }
    ],
    "drop_zones": [
      {
        "id": "q59-z-bio",
        "label_en": "Biometrics",
        "target_ids": [
          "q59-bio1",
          "q59-bio2"
        ]
      },
      {
        "id": "q59-z-cert",
        "label_en": "Certificates",
        "target_ids": [
          "q59-cert1",
          "q59-cert2"
        ]
      }
    ],
    "explanation": "\n<strong>Đối chiếu tính năng xác thực (Đề thi dump chỉ có 2 ô đích):</strong>\n<ul>\n  <li><strong>Biometrics:</strong>\n    <ul>\n      <li><code>may use a fingerprint reader to authenticate users</code>: Xác thực người dùng qua máy quét vân tay.</li>\n      <li><code>relies on a 'something you are' paradigm</code>: Dựa trên đặc điểm cơ thể (\"thứ bạn là\").</li>\n    </ul>\n  </li>\n  <li><strong>Certificates:</strong>\n    <ul>\n      <li><code>supports enterprise, third party, and public options</code>: Hỗ trợ chứng chỉ nội bộ doanh nghiệp, bên thứ ba và chứng chỉ công cộng.</li>\n      <li><code>issuer may revoke the digital credentials</code>: Đơn vị cấp phát có quyền thu hồi chứng chỉ (CRL/OCSP).</li>\n    </ul>\n  </li>\n  <li><em>Thẻ gây nhiễu (Distractor - Thuộc về MFA nên không dùng):</em>\n    <ul>\n      <li><code>requires two or more authentication methods to verify a user's identity</code>.</li>\n    </ul>\n  </li>\n</ul>\n"
  }
];
