import ts from 'rollup-plugin-typescript2';

const tsPlugin = ts({
    check: true,
    // tsconfigOverride: {
    //     exclude: ['test'],
    // },
});

export default {
    input: 'test/1.ts',
    output: {
        file: 'miniprogram_dist/1.js',
        format: 'cjs',
    },
    lib: ['esnext'],
    plugins: [tsPlugin],
}