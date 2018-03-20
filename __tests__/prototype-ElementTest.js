import '../index.js';

test('selector', () => {
    document.body.innerHTML = `
        <div id="div1">text</div>
    `;

    const div1 = document.body.elem('#div1');
    expect(div1.innerHTML).toBe('text');
});
