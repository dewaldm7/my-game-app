//accordian used to display info about the game

function Accordian() {
    return ( 
        <div className="accordian" class="accordion" id="accordionExample" style={{position: 'absolute', right:'50px', top:'100px'}} >
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="" aria-controls="collapseOne">
        Info
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <li>Click on a block to reveal image</li>
        <li>Match similar images</li>
        <li>Matched images will display green</li>
        <li>Unmatched images will display red</li>
        <li>Match all 16 images to complete game!</li>
        </div>
    </div>
    </div>


</div>
        );
}

export default Accordian;




