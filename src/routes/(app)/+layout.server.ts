export async function load({cookies}) {
    const accentColor = parseInt(cookies.get('accentColor') || "0");
    return {
        accentColor
    }
}