import {save} from "@tauri-apps/plugin-dialog";
import { writeFile} from "@tauri-apps/plugin-fs";

export async function saveImgDialog(imageUrl: string, filename: string = "image.png") {
    const filePath = await save(({
        defaultPath: filename,
        filters: [
            {
                name: 'image-filter',
                extensions: ['png', 'jpg'],
            }
        ]
    }))

    if (!filePath) // Cancelled by user.
        return;

    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const contentBuffer = new Uint8Array(arrayBuffer);

    await writeFile(filePath, contentBuffer);
}