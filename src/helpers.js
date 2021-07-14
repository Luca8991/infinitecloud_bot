export const getCurrentPath = (ctx) => {
    return ctx.session.currentPath ? ctx.session.currentPath : '/';
};

export const setCurrentPath = (ctx, path) => {
    ctx.session.currentPath = path;
};

export const getFileExtension = async (ctx, fileType) => {
    let fileId, fileInfo, extension;
    switch (fileType) {
        case 'photo':
            return '.jpg';
        case 'document':
            fileId = ctx.message.document.file_id;
            fileInfo = await ctx.telegram.getFile(fileId);
            extension = '';
            if (fileInfo.file_path.includes('.')) {
                extension = '.'+fileInfo.file_path.split('.').pop();
            }
            return extension;
        case 'video':
            return '.mp4';
    }
};
