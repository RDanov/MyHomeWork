<?=
include_once 'array_for_vote.php';
function array_for_visible($arr)
{
    foreach ($arr as $value) {
        echo '<label for="' . $value['id'] . '">  '. $value['id'] .'
                <input
                    id="' . $value['id'] . '"
                    type="' . $value['type'] . '"
                    name="' . $value['name'] . '"
                    value="' . $value['value'] . '"/></label>';
    }
}
