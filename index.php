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
        <main>
            <div class="container">
                <div class="row">
                    <!--<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center" id="displayDiv">-->
                    <!--<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 text-center" id="displayDiv">-->
                    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center" id="displayDiv">
                        <h1>Wikipedia Viewer</h1>
                        <form>
                            <div class="form-group">

                                <!--                                <label>
                                                                    <h3>Search here </h3>
                                                                </label>-->
                                <!--                                <div class="row">
                                                                    </div>
                                
                                                                <input type="text" class="form-control" id="searchInput" placeholder="Search here">
                                                                <input type="text" class="form-control col-xs-12 col-sm-6 col-sm-offset-3" id="searchInput" placeholder="Search here">
                                                                    <input type="text" class="col-xs-12 col-sm-6" id="searchInput" placeholder="Search here">
                                                 s                     </div>
                                                                    <a href="https://en.wikipedia.org/wiki/Special:Random" class="btn btn-default"> Random </a>
                                                                    <div class="row">
                                                                    <a href="https://en.wikipedia.org/wiki/Special:Random" class="btn btn-default col-xs-12 col-sm-6 col-sm-offset-3"> 
                                                                    <a href="https://en.wikipedia.org/wiki/Special:Random" class="btn btn-default col-xs-12 col-sm-6"> 
                                                                        Random page
                                                                    </a>
                                                                </div>-->
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="input-group">
                                            <input type="text" id="searchInput" class="form-control" placeholder="Search here">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" id="searchBtn">Search</button>
                                                <a href="https://en.wikipedia.org/wiki/Special:Random" class="btn btn-default"> 
                                                    Random page
                                                </a>
                                            </span>  
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <label>
                                            <!--<input type="checkbox" id="autoSearch" class="" checked="checked">-->
                                            <input checked type="checkbox" id="autoSearch" name="autoSearch" class="" checked/>
<!--                                            <input type="checkbox" name="df" checked>
                                            <input type="checkbox" checked="checked">
                                            <input type="checkbox" checked>
                                            <input type="checkbox">-->
                                            Automatic Search 
                                        </label>  
                                    </div>
                                </div>

                            </div>
                        </form>
                        <p id="displayP"></p>
                        <div id="resultDiv">

                        </div>
                    </div>
                </div>
        </main>
        <footer class="text-center">
            Coded by <a href="https://github.com/QGfcc">QG</a>
        </footer>

    </body>
</html>
