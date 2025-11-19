// Import gambar Multi
import img1 from "../assets/Multi/Multi-1.png";
import img2 from "../assets/Multi/Multi-2.png";
import img3 from "../assets/Multi/Multi-3.png";
import img4 from "../assets/Multi/Multi-4.png";
import img5 from "../assets/Multi/Multi-5.png";
import img6 from "../assets/Multi/Multi-6.png";
import img7 from "../assets/Multi/Multi-7.png";
import img8 from "../assets/Multi/Multi-8.png";
import img9 from "../assets/Multi/Multi-9.png";
import img10 from "../assets/Multi/Multi-10.png";
import img11 from "../assets/Multi/Multi-11.png";
import img12 from "../assets/Multi/Multi-12.png";

// Import gambar So (ubah nama variabel supaya valid)
import so1 from "../assets/SingleOne/So-1.png";
import so2 from "../assets/SingleOne/So-2.png";
import so3 from "../assets/SingleOne/So-3.png";
import so4 from "../assets/SingleOne/So-4.png";
import so5 from "../assets/SingleOne/So-5.png";
import so6 from "../assets/SingleOne/So-6.png";
import so7 from "../assets/SingleOne/So-7.png";
import so8 from "../assets/SingleOne/So-8.png";
import so9 from "../assets/SingleOne/So-9.png";
import so10 from "../assets/SingleOne/So-10.png";

// kasir
import kas1 from "../assets/kasir/kg-1.png";
import kas2 from "../assets/kasir/kg-2.png";
import kas3 from "../assets/kasir/kg-3.png";
import kas4 from "../assets/kasir/kg-4.png";

// umrah
// Import gambar Umroh
import um1 from "../assets/Umroh/um1.png";
import um2 from "../assets/Umroh/um2.png";
import um3 from "../assets/Umroh/um3.png";
import um4 from "../assets/Umroh/um4.png";
import um5 from "../assets/Umroh/um5.png";
import um6 from "../assets/Umroh/um6.png";
import um7 from "../assets/Umroh/um7.png";
import um8 from "../assets/Umroh/um8.png";
import um9 from "../assets/Umroh/um9.png";
import um10 from "../assets/Umroh/um10.png";
import um11 from "../assets/Umroh/um11.png";
import um12 from "../assets/Umroh/um12.png";

// Rentals
import cr1 from "../assets/Rentals/cr-1.png";
import cr2 from "../assets/Rentals/cr-2.png";
import cr3 from "../assets/Rentals/cr-3.png";

// Array proyek
export const proyek = [
  {
    ProjectOne: {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
      ],
      tech: ["Laravel", "Inertia", "MySQL", "React"],
    },
    ProjectTwo: {
      images: [so1, so2, so3, so4, so5, so6, so7, so8, so9, so10],
      tech: ["Laravel", "Inertia", "MySQL", "React"],
    },
    ProjectThree: {
      images: [kas1, kas2, kas3, kas4],
      tech: ["Flutter", "SQLlite"], // contoh, sesuaikan
    },
    ProjectFour: {
      // kategori baru Umroh
      images: [um1, um2, um3, um4, um5, um6, um7, um8, um9, um10, um11, um12],
      tech: ["HTML5", "CSS3", "Javascript"],
    },
    ProjectFive: {
      // kategori baru Umroh
      images: [cr1, cr2, cr3],
      tech: ["Flutter", "Golang"],
    },
  },
];
