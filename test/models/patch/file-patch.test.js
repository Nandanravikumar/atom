import FilePatch from '../../../lib/models/patch/file-patch';
    assert.strictEqual(filePatch.getHunkAt(1), hunks[0]);

    const nullFilePatch = FilePatch.createNull();
