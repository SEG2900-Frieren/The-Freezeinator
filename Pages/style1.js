document.addEventListener("DOMContentLoaded", () => {
    new FinisherHeader({
        "count": 12,
        "size": {
            "min": 1300,
            "max": 1500,
            "pulse": 2
        },
        "speed": {
            "x": {
                "min": 0.6,
                "max": 3
            },
            "y": {
                "min": 0.6,
                "max": 3
            }
        },
        "colors": {
            "background": "#a6b5f3",
            "particles": [
                "#b0c4f5",
                "#8fb0ff",
                "#cccccc",
                "#bebcf1"
            ]
        },
        "blending": "lighten",
        "opacity": {
            "center": 0.6,
            "edge": 0
        },
        "skew": -2,
        "shapes": ["c"]
    });
});