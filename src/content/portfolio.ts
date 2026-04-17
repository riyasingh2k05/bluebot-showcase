/**
 * EDIT THIS FILE to update your portfolio content.
 * Change name, bio, skills, projects, and contact links here.
 */

export const portfolio = {
  name: "MR Mohib",
  role: "Robotics & AI Engineer",
  tagline: "I build intelligent machines that move, sense, and think.",
  about:
    "Hi! I'm a robotics enthusiast passionate about autonomous systems, computer vision, and embedded intelligence. I love turning ideas into machines that interact with the real world.",

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  skills: [
    { name: "ROS 2", icon: "🤖" },
    { name: "Python", icon: "🐍" },
    { name: "C++ / Embedded", icon: "⚙️" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Machine Learning", icon: "🧠" },
    { name: "Arduino / RPi", icon: "🔌" },
    { name: "SLAM & Navigation", icon: "🗺️" },
    { name: "CAD / SolidWorks", icon: "📐" },
  ],

  projects: [
    {
      title: "Autonomous Line Follower",
      description:
        "PID-controlled robot using IR sensors and Arduino, capable of navigating complex tracks with smooth turns.",
      tags: ["Arduino", "PID", "Sensors"],
    },
    {
      title: "Object Detection Drone",
      description:
        "Quadcopter with onboard YOLOv8 model for real-time object recognition and tracking using a Raspberry Pi.",
      tags: ["Python", "YOLO", "Drone"],
    },
    {
      title: "Robotic Arm Pick-and-Place",
      description:
        "6-DOF robotic arm controlled via ROS 2, performing inverse kinematics and vision-guided manipulation.",
      tags: ["ROS 2", "MoveIt", "OpenCV"],
    },
    {
      title: "SLAM Mapping Rover",
      description:
        "Mobile rover building 2D occupancy maps with LiDAR and running autonomous navigation with Nav2.",
      tags: ["LiDAR", "SLAM", "Nav2"],
    },
  ],

  contact: {
    email: "sr.mohib92@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammad-mohib-ali-7b7a22322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_mohib_sayyed?igsh=MXV5cDQyM2poYWxmMw%3D%3D&utm_source=qr",
  },
};
