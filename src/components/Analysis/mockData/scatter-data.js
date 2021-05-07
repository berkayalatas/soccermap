"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var womenData = [
    { 'x': 115, 'y': 57 }, { 'x': 138, 'y': 57 }, { 'x': 166, 'y': 57 }, { 'x': 122, 'y': 57 },
    { 'x': 126, 'y': 57 }, { 'x': 130, 'y': 57 }, { 'x': 125, 'y': 57 }, { 'x': 144, 'y': 57 },
    { 'x': 150, 'y': 57 }, { 'x': 120, 'y': 57 }, { 'x': 125, 'y': 57 }, { 'x': 130, 'y': 57 },
    { 'x': 103, 'y': 58 }, { 'x': 116, 'y': 58 }, { 'x': 130, 'y': 58 }, { 'x': 126, 'y': 58 },
    { 'x': 136, 'y': 58 }, { 'x': 148, 'y': 58 }, { 'x': 119, 'y': 58 }, { 'x': 141, 'y': 58 },
    { 'x': 159, 'y': 58 }, { 'x': 120, 'y': 58 }, { 'x': 135, 'y': 58 }, { 'x': 163, 'y': 58 },
    { 'x': 119, 'y': 59 }, { 'x': 131, 'y': 59 }, { 'x': 148, 'y': 59 }, { 'x': 123, 'y': 59 },
    { 'x': 137, 'y': 59 }, { 'x': 149, 'y': 59 }, { 'x': 121, 'y': 59 }, { 'x': 142, 'y': 59 },
    { 'x': 160, 'y': 59 }, { 'x': 118, 'y': 59 }, { 'x': 130, 'y': 59 }, { 'x': 146, 'y': 59 },
    { 'x': 119, 'y': 60 }, { 'x': 133, 'y': 60 }, { 'x': 150, 'y': 60 }, { 'x': 133, 'y': 60 },
    { 'x': 149, 'y': 60 }, { 'x': 165, 'y': 60 }, { 'x': 130, 'y': 60 }, { 'x': 139, 'y': 60 },
    { 'x': 154, 'y': 60 }, { 'x': 118, 'y': 60 }, { 'x': 152, 'y': 60 }, { 'x': 154, 'y': 60 },
    { 'x': 130, 'y': 61 }, { 'x': 145, 'y': 61 }, { 'x': 166, 'y': 61 }, { 'x': 131, 'y': 61 },
    { 'x': 143, 'y': 61 }, { 'x': 162, 'y': 61 }, { 'x': 131, 'y': 61 }, { 'x': 145, 'y': 61 },
    { 'x': 162, 'y': 61 }, { 'x': 115, 'y': 61 }, { 'x': 149, 'y': 61 }, { 'x': 183, 'y': 61 },
    { 'x': 121, 'y': 62 }, { 'x': 139, 'y': 62 }, { 'x': 159, 'y': 62 }, { 'x': 135, 'y': 62 },
    { 'x': 152, 'y': 62 }, { 'x': 178, 'y': 62 }, { 'x': 130, 'y': 62 }, { 'x': 153, 'y': 62 },
    { 'x': 172, 'y': 62 }, { 'x': 114, 'y': 62 }, { 'x': 135, 'y': 62 }, { 'x': 154, 'y': 62 },
    { 'x': 126, 'y': 63 }, { 'x': 141, 'y': 63 }, { 'x': 160, 'y': 63 }, { 'x': 135, 'y': 63 },
    { 'x': 149, 'y': 63 }, { 'x': 180, 'y': 63 }, { 'x': 132, 'y': 63 }, { 'x': 144, 'y': 63 },
    { 'x': 163, 'y': 63 }, { 'x': 122, 'y': 63 }, { 'x': 146, 'y': 63 }, { 'x': 156, 'y': 63 },
    { 'x': 133, 'y': 64 }, { 'x': 150, 'y': 64 }, { 'x': 176, 'y': 64 }, { 'x': 133, 'y': 64 },
    { 'x': 149, 'y': 64 }, { 'x': 176, 'y': 64 }, { 'x': 136, 'y': 64 }, { 'x': 157, 'y': 64 },
    { 'x': 174, 'y': 64 }, { 'x': 131, 'y': 64 }, { 'x': 155, 'y': 64 }, { 'x': 191, 'y': 64 },
    { 'x': 136, 'y': 65 }, { 'x': 149, 'y': 65 }, { 'x': 177, 'y': 65 }, { 'x': 143, 'y': 65 },
    { 'x': 149, 'y': 65 }, { 'x': 184, 'y': 65 }, { 'x': 128, 'y': 65 }, { 'x': 146, 'y': 65 },
    { 'x': 157, 'y': 65 }, { 'x': 133, 'y': 65 }, { 'x': 153, 'y': 65 }, { 'x': 173, 'y': 65 },
    { 'x': 141, 'y': 66 }, { 'x': 156, 'y': 66 }, { 'x': 175, 'y': 66 }, { 'x': 125, 'y': 66 },
    { 'x': 138, 'y': 66 }, { 'x': 165, 'y': 66 }, { 'x': 122, 'y': 66 }, { 'x': 164, 'y': 66 },
    { 'x': 182, 'y': 66 }, { 'x': 137, 'y': 66 }, { 'x': 157, 'y': 66 }, { 'x': 176, 'y': 66 },
    { 'x': 149, 'y': 67 }, { 'x': 159, 'y': 67 }, { 'x': 179, 'y': 67 }, { 'x': 156, 'y': 67 },
    { 'x': 179, 'y': 67 }, { 'x': 186, 'y': 67 }, { 'x': 147, 'y': 67 }, { 'x': 166, 'y': 67 },
    { 'x': 185, 'y': 67 }, { 'x': 140, 'y': 67 }, { 'x': 160, 'y': 67 }, { 'x': 180, 'y': 67 },
    { 'x': 145, 'y': 68 }, { 'x': 155, 'y': 68 }, { 'x': 170, 'y': 68 }, { 'x': 129, 'y': 68 },
    { 'x': 164, 'y': 68 }, { 'x': 189, 'y': 68 }, { 'x': 150, 'y': 68 }, { 'x': 157, 'y': 68 },
    { 'x': 183, 'y': 68 }, { 'x': 144, 'y': 68 }, { 'x': 170, 'y': 68 }, { 'x': 180, 'y': 68 }
];
var mendData = [
    { 'x': 131, 'y': 62 }, { 'x': 140, 'y': 62 }, { 'x': 149, 'y': 62 }, { 'x': 115, 'y': 62 },
    { 'x': 134, 'y': 62 }, { 'x': 183, 'y': 62 }, { 'x': 155, 'y': 62 }, { 'x': 164, 'y': 62 },
    { 'x': 169, 'y': 62 }, { 'x': 122, 'y': 62 }, { 'x': 161, 'y': 62 }, { 'x': 166, 'y': 62 },
    { 'x': 137, 'y': 63 }, { 'x': 140, 'y': 63 }, { 'x': 140, 'y': 63 }, { 'x': 126, 'y': 63 },
    { 'x': 150, 'y': 63 }, { 'x': 153, 'y': 63 }, { 'x': 154, 'y': 63 }, { 'x': 139, 'y': 63 },
    { 'x': 164, 'y': 63 }, { 'x': 162, 'y': 63 }, { 'x': 167, 'y': 63 }, { 'x': 146, 'y': 63 },
    { 'x': 150, 'y': 64 }, { 'x': 141, 'y': 64 }, { 'x': 142, 'y': 64 }, { 'x': 129, 'y': 64 },
    { 'x': 159, 'y': 64 }, { 'x': 158, 'y': 64 }, { 'x': 162, 'y': 64 }, { 'x': 136, 'y': 64 },
    { 'x': 176, 'y': 64 }, { 'x': 170, 'y': 64 }, { 'x': 167, 'y': 64 }, { 'x': 144, 'y': 64 },
    { 'x': 143, 'y': 65 }, { 'x': 137, 'y': 65 }, { 'x': 137, 'y': 65 }, { 'x': 140, 'y': 65 },
    { 'x': 161, 'y': 65 }, { 'x': 150, 'y': 65 }, { 'x': 155, 'y': 65 }, { 'x': 160, 'y': 65 },
    { 'x': 182, 'y': 65 }, { 'x': 168, 'y': 65 }, { 'x': 181, 'y': 65 }, { 'x': 165, 'y': 65 },
    { 'x': 148, 'y': 66 }, { 'x': 145, 'y': 66 }, { 'x': 137, 'y': 66 }, { 'x': 138, 'y': 66 },
    { 'x': 162, 'y': 66 }, { 'x': 166, 'y': 66 }, { 'x': 159, 'y': 66 }, { 'x': 151, 'y': 66 },
    { 'x': 180, 'y': 66 }, { 'x': 181, 'y': 66 }, { 'x': 174, 'y': 66 }, { 'x': 159, 'y': 66 },
    { 'x': 151, 'y': 67 }, { 'x': 148, 'y': 67 }, { 'x': 141, 'y': 67 }, { 'x': 145, 'y': 67 },
    { 'x': 165, 'y': 67 }, { 'x': 168, 'y': 67 }, { 'x': 159, 'y': 67 }, { 'x': 183, 'y': 67 },
    { 'x': 188, 'y': 67 }, { 'x': 187, 'y': 67 }, { 'x': 172, 'y': 67 }, { 'x': 193, 'y': 67 },
    { 'x': 153, 'y': 68 }, { 'x': 153, 'y': 68 }, { 'x': 147, 'y': 68 }, { 'x': 163, 'y': 68 },
    { 'x': 174, 'y': 68 }, { 'x': 173, 'y': 68 }, { 'x': 160, 'y': 68 }, { 'x': 191, 'y': 68 },
    { 'x': 189, 'y': 68 }, { 'x': 182, 'y': 68 }, { 'x': 181, 'y': 68 }, { 'x': 196, 'y': 68 },
    { 'x': 152, 'y': 69 }, { 'x': 173, 'y': 69 }, { 'x': 190, 'y': 69 }, { 'x': 161, 'y': 69 },
    { 'x': 173, 'y': 69 }, { 'x': 185, 'y': 69 }, { 'x': 141, 'y': 69 }, { 'x': 149, 'y': 69 },
    { 'x': 186, 'y': 69 }, { 'x': 188, 'y': 69 }, { 'x': 148, 'y': 69 }, { 'x': 174, 'y': 69 },
    { 'x': 164, 'y': 70 }, { 'x': 182, 'y': 70 }, { 'x': 200, 'y': 70 }, { 'x': 151, 'y': 70 },
    { 'x': 162, 'y': 70 }, { 'x': 200, 'y': 70 }, { 'x': 166, 'y': 70 }, { 'x': 177, 'y': 70 },
    { 'x': 188, 'y': 70 }, { 'x': 156, 'y': 70 }, { 'x': 175, 'y': 70 }, { 'x': 191, 'y': 70 },
    { 'x': 174, 'y': 71 }, { 'x': 187, 'y': 71 }, { 'x': 208, 'y': 71 }, { 'x': 166, 'y': 71 },
    { 'x': 150, 'y': 71 }, { 'x': 194, 'y': 71 }, { 'x': 157, 'y': 71 }, { 'x': 183, 'y': 71 },
    { 'x': 204, 'y': 71 }, { 'x': 162, 'y': 71 }, { 'x': 179, 'y': 71 }, { 'x': 196, 'y': 71 },
    { 'x': 170, 'y': 72 }, { 'x': 184, 'y': 72 }, { 'x': 197, 'y': 72 }, { 'x': 162, 'y': 72 },
    { 'x': 177, 'y': 72 }, { 'x': 203, 'y': 72 }, { 'x': 159, 'y': 72 }, { 'x': 178, 'y': 72 },
    { 'x': 198, 'y': 72 }, { 'x': 167, 'y': 72 }, { 'x': 184, 'y': 72 }, { 'x': 201, 'y': 72 },
    { 'x': 167, 'y': 73 }, { 'x': 178, 'y': 73 }, { 'x': 215, 'y': 73 }, { 'x': 207, 'y': 73 },
    { 'x': 172, 'y': 73 }, { 'x': 204, 'y': 73 }, { 'x': 162, 'y': 73 }, { 'x': 182, 'y': 73 },
    { 'x': 201, 'y': 73 }, { 'x': 172, 'y': 73 }, { 'x': 189, 'y': 73 }, { 'x': 206, 'y': 73 },
    { 'x': 150, 'y': 74 }, { 'x': 187, 'y': 74 }, { 'x': 153, 'y': 74 }, { 'x': 171, 'y': 74 },
    { 'x': 214, 'y': 74 }, { 'x': 211, 'y': 74 }, { 'x': 166, 'y': 74 }, { 'x': 185, 'y': 74 },
    { 'x': 204, 'y': 74 }, { 'x': 177, 'y': 74 }, { 'x': 194, 'y': 74 }, { 'x': 212, 'y': 74 }
];
exports.scatterData = {
    'getMaleData': mendData,
    'getFemaleData': womenData
};
