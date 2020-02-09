let recoEl = $(
    `<div class="workBlock">
    <h5 class="exercise"><p class="bold">Recommended Weight: </p> ${localStorage.getItem("weightsM")} || ${localStorage.getItem("weightsF")}</h5>
    <h5 class="exercise"><p class="bold">Sets per Exercise: </p> ${localStorage.getItem("sets")}</h5>
    <h5 class="exercise"><p class="bold">Repetitions per Exercise: </p> ${localStorage.getItem("reps")}</h5>
    </div>`);
    
let reco = $(".reco")
reco.append(recoEl)

let renderWO = JSON.parse(localStorage.getItem("workout"));

for (let i = 0; i < renderWO.length; i++) {
    let finalWO = $(`
    <div class="woField${i} workoutField">
    <label class="WOcheckbox">
        <p class="workOutItem"> ${renderWO[i]}
        <input class="checkbox" type="checkbox">
        </p>
    </label>
    </div>
    `);

    $(".workOut").append(finalWO);
}