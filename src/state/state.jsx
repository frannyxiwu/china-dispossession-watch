import { atom } from "recoil";

export const mapValues = atom({
	key: "mapValues",
	default: {
        locationHovered: '',
    },
});

export const trailValues = atom({
    key: 'historyTrail',
    default: {
        historyTrail: [],
    }
})