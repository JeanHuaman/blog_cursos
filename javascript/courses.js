export function courses()
{
    const courses = [
        {
            nombre:"Teoria de Lenguajes y Métodos de Traduccion",
            imagen: "../img/lenguaje.jpg",
            carrera : "Ing. de Software y Sistemas",
            ciclo : "5to"               
        },
        {
            nombre:"Redes y Comunicaciones",
            imagen: "../img/redes.jpg",
            carrera : "Ing. de Software , Sistemas y Redes",
            ciclo : "5to"               
        }
    ]

    const d=document,
    $courses = d.querySelector(".courses-cards"),
    $template = d.getElementById("template-courses").content,
    $fragment = d.createDocumentFragment();

    courses.forEach(el=>
        {
            $template.querySelector("img").src = el.imagen;
            $template.querySelector("img").alt = el.nombre;
            $template.querySelector(".carrera-name").textContent = el.carrera;
            $template.querySelector(".ciclo").textContent = el.ciclo;
            $template.querySelector(".course-name").textContent = el.nombre;
            
            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        })
        $courses.appendChild($fragment);

}