<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" ></script>
        <title>Wikipedia Viewer</title>

        <!--to delete-->
        <!--<script src="js/autoReload.js" type="text/javascript"></script>-->
        <!--END to delete-->

        <!--custom pages-->
        <script src="js/wikipediaViewer.js" type="text/javascript"></script>
        <link href="css/wikipediaViewer.css" rel="stylesheet" type="text/css"/>

    </head>
    <body>
        <?php
        ?>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center" id="displayDiv">
                    <h1>Wikipedia Viewer</h1>
                    <form>
                        <!--<div class="form-group">-->
<!--                            <label>
                                Search
                            </label>-->
                            <input type="text" class="form-control" id="searchInput" placeholder="Search Here">
                        <!--</div>-->
                    </form>
                    <p id="displayP"></p>
                    <div id="resultDiv">
                        
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>
