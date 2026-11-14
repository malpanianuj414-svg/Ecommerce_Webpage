// Master Data Source Infrastructure System Global State
const globalProductCatalogDataSet = [
    { 
        id: 1, 
        category: "smartphones", 
        name: "Galaxy S24 Ultra", 
        price: 1199.00, 
        image: "/images/s24ultra.png", 
        images: [
            "/images/s24ultra.png", 
            "/images/ultraphoneone.png", 
            "/images/ultraphonetwo.png"
        ], 
        brand: "Samsung", 
        description: "Premium flagship smartphone engineered with titanium frame durability, integrated S-Pen stylus matrix, advanced AI-driven translation processing algorithms, and a pro-grade 200MP telemetry quad-camera array optimized for low-light execution dynamics." 
    },
    { 
        id: 2, 
        category: "smartphones", 
        name: "iPhone 15 Pro", 
        price: 1099.00, 
        image: "/images/iphone15two.png", 
        images: [
            "/images/iphone15two.png", 
            "/images/iphone15one.png", 
            "/images/iphone15.png"
        ], 
        brand: "Apple", 
        description: "Aerospace-grade titanium design hosting the advanced A17 Pro core matrix. Features user-configurable contextual Action triggers, seamless high-bandwidth Type-C connectivity parameters, and high-fidelity computational portrait capture subroutines." 
    },
    { 
        id: 3, 
        category: "smartphones", 
        name: "Pixel 8 Pro", 
        price: 999.00, 
        image: "/images/pixel8.png", 
        images: [
            "/images/pixel8.png", 
            "/images/pixel8one.png", 
            "/images/pixel8two.png"
        ], 
        brand: "Google", 
        description: "The premier pure-Android environment driven by Google Tensor G3 silicon. Seamlessly processes live call screening, algorithmic photo reconstruction, uncompressed night-sight imaging maps, and reactive adaptive battery lifecycle curves." 
    },
    { 
        id: 4, 
        category: "smartphones", 
        name: "OnePlus 12", 
        price: 899.00, 
        image: "/images/oneplus12.png", 
        images: [
            "/images/oneplus12.png", 
            "/images/oneplus12one.png", 
            "/images/oneplus12two.png"
        ], 
        brand: "OnePlus", 
        description: "High-octane Snapdragon architecture featuring cryogenic dual-vapor cooling pathways, ultra-rapid 100W power delivery profiles, and customized Hasselblad structural color matrices for unparalleled clarity." 
    },
    { 
        id: 5, 
        category: "smartwatches", 
        name: "Galaxy Watch 7", 
        price: 329.00, 
        image: "/images/galaxy7watch.png", 
        images: [
            "/images/galaxy7watch.png", 
            "/images/galaxy7watchone.png", 
            "/images/galaxy7watchtwo.png"
        ], 
        brand: "Samsung", 
        description: "Advanced BioActive biometric tracking sensor array delivering granular metabolic metrics, sleep stage architecture visualization pathways, and context-aware GPS mapping coordinates for precise location analytics." 
    },
    { 
        id: 6, 
        category: "smartwatches", 
        name: "Apple Watch Series 9", 
        price: 399.00, 
        image: "/images/applewatch9.png", 
        images: [
            "/images/applewatch9.png", 
            "/images/applewatch9one.png", 
            "/images/applewatch9two.png"
        ], 
        brand: "Apple", 
        description: "Powered by custom S9 system silicon enabling ultra-bright display rendering matrices and intuitive double-tap touchless interface gestures. Hosts integrated ECG mapping and critical crash detection sensors." 
    },
    { 
        id: 7, 
        category: "smartwatches", 
        name: "Fitbit Sense 2", 
        price: 279.00, 
        image: "/images/fitbitsense2watch.png", 
        images: [
            "/images/fitbitsense2watch.png", 
            "/images/fitbitsense2watchone.png", 
            "/images/fitbitsense2watchtwo.png"
        ], 
        brand: "Fitbit", 
        description: "Dedicated operational stress-monitoring engine using continuous electrodermal skin activity tracking metrics. Synchronizes heart rhythm anomaly scanning with structural sleep quality scoring indexes." 
    },
    { 
        id: 8, 
        category: "smartwatches", 
        name: "Amazfit GTR 4", 
        price: 239.00, 
        image: "/images/amazfitgtr4watch.png", 
        images: [
            "/images/amazfitgtr4watch.png", 
            "/images/amazfitgtr4watchone.png", 
            "/images/amazfitgtr4watchtwo.png"
        ], 
        brand: "Amazfit", 
        description: "Classic circular timepiece framing a vibrant HD AMOLED array. Hosts multi-band circular-polarized GPS navigation routes and an extended 14-day energy reserve matrix built for deep field deployment." 
    },
    { 
        id: 9, 
        category: "shirts", 
        name: "Classic Cotton Oxford", 
        price: 78.00, 
        image: "/images/shirt.png", 
        images: [
            "/images/shirt.png", 
            "/images/shirtone.png", 
            "/images/shirttwo.png"
        ], 
        brand: "Zara", 
        description: "Premium high-grade combed long-staple cotton tailoring matrix. Features a structured silhouette drop, double-reinforced traditional button-down collars, crisp weave structural architecture, and an optimal breathability weight matrix." 
    },
    { 
        id: 10, 
        category: "shirts", 
        name: "Linen Summer Shirt", 
        price: 65.00, 
        image: "/images/linenshirts.png", 
        images: [
            "/images/linenshirts.png", 
            "/images/linenshirtsone.png", 
            "/images/linenshirtstwo.png"
        ], 
        brand: "H&M", 
        description: "Woven organically from pure premium lightweight flax yarn fibers. Offers maximum heat dissipation vectors, relaxed drop shoulder profiles, and a relaxed open-weave structure ideal for seasonal environments." 
    },
    { 
        id: 11, 
        category: "shirts", 
        name: "Urban Polo Shirt", 
        price: 85.00, 
        image: "/images/poloshirts.png", 
        images: [
            "/images/poloshirts.png", 
            "/images/poloshirtsone.png", 
            "/images/poloshirtstwo.png"
        ], 
        brand: "Brooks Brothers", 
        description: "Interlocking micro-pique matrix knit structural composition layout. Engineered with reinforced anti-curl ribbed collars, subtle tonal emblem treatments, and colorfast wash-resilient performance parameters." 
    },
    { 
        id: 12, 
        category: "shirts", 
        name: "Classic Knit Shirt", 
        price: 72.00, 
        image: "/images/knitshirts.png", 
        images: [
            "/images/knitshirts.png", 
            "/images/knitshirtsone.png", 
            "/images/knitshirtstwo.png"
        ], 
        brand: "Uniqlo", 
        description: "Innovative synthetic-natural hybrid textile cross-stitch structure. Retains clean structural lines with high elasticity memory channels, quick-dry operations, and effortless modern aesthetic presentation layout." 
    },
    { 
        id: 13, 
        category: "shoes", 
        name: "Air Max Runner", 
        price: 120.00, 
        image: "/images/airmaxshoes.png", 
        images: [
            "/images/airmaxshoes.png", 
            "/images/airmaxshoesone.png", 
            "/images/airmaxshoestwo.png"
        ], 
        brand: "Nike", 
        description: "High-performance synthetic mesh configuration overlay featuring iconic under-heel pressurized thermodynamic gas containment windows. Provides outstanding kinetic rebound vectors and impact stress mitigation routes." 
    },
    { 
        id: 14, 
        category: "shoes", 
        name: "Ultraboost X", 
        price: 140.00, 
        image: "/images/ultrashoes.png", 
        images: [
            "/images/ultrashoes.png", 
            "/images/ultrashoesone.png", 
            "/images/ultrashoestwo.png"
        ], 
        brand: "Adidas", 
        description: "Adaptive signature Primeknit upper structure maps seamlessly around the foot matrix. Supported by micro-encapsulated expanded thermoplastic polyurethane midsoles for continuous energy return curves." 
    },
    { 
        id: 15, 
        category: "shoes", 
        name: "Classic Leather Loafer", 
        price: 110.00, 
        image: "/images/loafershoes.png", 
        images: [
            "/images/loafershoes.png", 
            "/images/loafershoesone.png", 
            "/images/loafershoestwo.png"
        ], 
        brand: "Clarks", 
        description: "Hand-burnished full-grain genuine leather structural outer composition. Hand-stitched welt channels coupled with layered OrthoLite memory-foam cushioning matrices deliver superior office-to-street ergonomics." 
    },
    { 
        id: 16, 
        category: "shoes", 
        name: "Trail Hiking Boot", 
        price: 130.00, 
        image: "/images/trailboots.png", 
        images: [
            "/images/trailboots.png", 
            "/images/trailbootsone.png", 
            "/images/trailbootstwo.png"
        ], 
        brand: "Timberland", 
        description: "Rugged exterior build with premium waterproof nubuck leather membranes, completely sealed seam matrices, and deep-lug rubber multi-directional outsoles optimized for high traction on unstable terrain profiles." 
    }
];

function routeToTargetProductDetailPage(id) {
    localStorage.setItem('ActiveTargetProductViewDetailID', id);
    window.location.href = "product-details.html";
}