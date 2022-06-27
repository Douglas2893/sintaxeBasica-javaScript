async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida!');
        }, 3000);
    });

    await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

console.log(resolvePromise());

    // apos 2 segundos, retornará o valor
    // "Resolvida passndo pelo then e agora acabou"