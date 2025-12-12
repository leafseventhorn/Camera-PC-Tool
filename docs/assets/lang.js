const i18n = {
  zh: {
    subtitle: "Windows UVC 摄像头控制软件 · PTZ 云台 · RTMP · 固件升级",
    download: "下载 Windows 安装包",
    intro_title: "软件介绍",
    intro_1: "Tenveo Camera Controller（腾为相机助手）是一款专业的 Windows 摄像头管理工具，支持 Tenveo 及标准 UVC 摄像头。",
    intro_2: "软件集成视频预览、PTZ 控制、图像调节、AI 跟踪、RTMP 推流和 OTA 固件升级。",
    f1: "🎥 UVC 视频预览",
    f1d: "支持 H.265 / H.264 / MJPG / YUY2",
    f2: "🎛 PTZ 云台控制",
    f2d: "方向、变倍、预置位、聚焦",
    f3: "🎨 图像参数",
    f3d: "亮度、对比度、饱和度、锐度",
    f4: "🤖 AI 跟踪",
    f4d: "单人 / 多人智能跟踪",
    f5: "📡 RTMP 推流",
    f5d: "推流到第三方直播平台",
    f6: "🔄 OTA 升级",
    f6d: "在线固件升级，持续增强"
  },
  en: {
    subtitle: "Windows UVC Camera Software · PTZ · RTMP · Firmware Update",
    download: "Enter the download page",
    intro_title: "Introduction",
    intro_1: "Tenveo Camera Controller is a professional Windows camera management tool for Tenveo and standard UVC webcams.",
    intro_2: "It integrates preview, PTZ control, image tuning, AI tracking, RTMP streaming, and OTA firmware updates.",
    f1: "🎥 UVC Preview",
    f1d: "Supports H.265 / H.264 / MJPG / YUY2",
    f2: "🎛 PTZ Control",
    f2d: "Pan, Tilt, Zoom, Presets, Focus",
    f3: "🎨 Image Settings",
    f3d: "Brightness, contrast, saturation, sharpness",
    f4: "🤖 AI Tracking",
    f4d: "Single & multi-person tracking",
    f5: "📡 RTMP Streaming",
    f5d: "Stream to third-party platforms",
    f6: "🔄 OTA Update",
    f6d: "Online firmware upgrade"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = i18n[lang][el.dataset.i18n];
  });
}

// 默认中文
setLang("en");
