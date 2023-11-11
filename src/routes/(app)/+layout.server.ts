export async function load({cookies}) {
    let accentColors = ["#51b5cc", "#7700ff", "#ffc400", "#00ff2a"];
    const accentColor = parseInt(cookies.get('accentColor') || Math.floor(Math.random() * accentColors.length).toString());
    return {
        accentColor,
        accentColorArray: accentColors
    }
}