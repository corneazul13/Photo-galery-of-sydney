document.addEventListener('DOMContentLoaded', () => {
    const imgData = JSON.parse(localStorage.getItem('detalleImagen'));

    if (imgData) {
        document.getElementById('detalle-img').src = imgData.src;
        document.getElementById('detalle-img').alt = imgData.alt;
        document.getElementById('detalle-desc').textContent = imgData.alt;
        document.getElementById('detalle-autor').textContent = `Autor: ${imgData.author}`;
    } else {
        // Si no hay datos, muestra mensaje o imagen por defecto
        document.getElementById('detalle-desc').textContent = 'No se ha seleccionado ninguna imagen.';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imgData = JSON.parse(localStorage.getItem('detalleImagen'));

    if (imgData) {
        document.getElementById('detalle-img').src = imgData.src;
        document.getElementById('detalle-cat').textContent = imgData.category === 'nature' ? 'Naturaleza' : 'Ciudad';

        // Simulación de "descripción "
        const description = generarDescripcion(imgData);
        document.getElementById('detalle-desc').textContent = description;
    } else {
        document.getElementById('detalle-desc').textContent = 'No se pudo cargar la imagen.';
    }
});

function generarDescripcion(img) {
    const lower = img.src.toLowerCase();
    if (img.category === 'nature') return 'Un paisaje natural que transmite tranquilidad y conexión con la tierra es aquel que invita al silencio interior y al equilibrio. Al observarlo, los sentidos se sincronizan con el entorno: el suave murmullo del viento entre los árboles, el canto lejano de las aves y el fluir constante del agua generan una atmósfera de calma profunda. La luz del sol se filtra entre las hojas, tiñendo de dorado la superficie del suelo, mientras el aroma fresco de la vegetación recuerda la pureza del aire y la vida que brota de la tierra. En este escenario, el tiempo parece detenerse y la mente se libera del ruido cotidiano, permitiendo una conexión genuina con la naturaleza. Cada elemento —una piedra cubierta de musgo, una flor silvestre o el reflejo del cielo en un lago— se convierte en símbolo de equilibrio y serenidad. Este tipo de paisaje no solo relaja, sino que también inspira gratitud y respeto por el entorno natural.';
    if (img.category === 'city') return 'Una vista urbana moderna con arquitectura destacada refleja el dinamismo y la creatividad de la vida contemporánea. Los edificios de líneas limpias y formas geométricas se elevan hacia el cielo, combinando vidrio, acero y concreto en un equilibrio entre estética y funcionalidad. Cada estructura cuenta una historia: algunas simbolizan innovación tecnológica, otras la preservación del patrimonio adaptado al presente. Las luces de la ciudad crean un espectáculo visual que transforma el paisaje durante la noche, donde los reflejos en las fachadas de cristal y las sombras proyectadas generan una atmósfera vibrante y elegante. En las calles, el movimiento constante de personas y vehículos aporta energía y ritmo, mientras los espacios verdes, plazas y avenidas amplias ofrecen respiro dentro del entorno urbano. Esta fusión entre diseño, arte y tecnología convierte a la ciudad en un escenario de progreso y cultura.';

    return 'Imagen interesante con elementos visuales destacados.';
}
