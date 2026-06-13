import React from 'react';

const GalleryResq = (props) => 
    {
        // Array of image objects
        const images = [
          { id: 1, src: "/public/resq2.png", alt: "Image 1" },
          { id: 2, src: "/public/resq.png", alt: "Image 2" },
          { id: 3, src: "/public/P1070383.png", alt: "Image 3" },
          { id: 4, src: "/public/30461c78-b5f6-4d2c-a41b-7b014f313641.jpg", alt: "Image 4" },
          { id: 5, src: "/public/WhatsApp Image 2025-07-04 at 14.49.04 (1).jpeg", alt: "Image 5" },
           { id: 6, src: "/public/WhatsApp Image 2025-07-04 at 14.49.04.jpeg", alt: "Image 6" },
           { id: 7, src: "/public/WhatsApp Image 2025-07-04 at 14.49.05 (1).jpeg", alt: "Image 7" },
          { id: 8, src: "/public/IMG_3511.jpg", alt: "Image 8" },
          { id: 9, src: "/public/WhatsApp Image 2025-07-04 at 14.49.05.jpeg", alt: "Image 9" },
           { id: 10, src: "/public/IMG_0311.jpg", alt: "Image 10" },
           { id: 11, src: "/public/IMG_0515.jpg", alt: "Image 11" },
          { id: 12, src: "/public/IMG_0004.jpg", alt: "Image 12" }
        ];
      
        return (
          <div className="flex flex-wrap items-center justify-center min-h-screen gap-4 p-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex max-w-sm items-center text-white rounded-xl bg-orange-900 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-40 h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-[2]"
                />
              </div>
            ))}
          </div>
        );
      };

export default GalleryResq;