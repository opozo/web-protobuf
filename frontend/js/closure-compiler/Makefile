compile_pretty:
	java -jar closure-compiler.jar \
	--js ../closure-template/soyutils_usegoog.js \
	--js ../src/** \
	--js_output_file ../main.js \
	--only_closure_dependencies \
	--closure_entry_point=webproto.main \
	--js ../closure-library/closure/goog/** \
	--angular_pass \
	--generate_exports \
	--formatting=pretty_print

compile:
	java -jar closure-compiler.jar \
	--js ../closure-template/soyutils_usegoog.js \
	--js ../src/** \
	--js_output_file ../min/main.min.js \
	--only_closure_dependencies \
	--closure_entry_point=webproto.main \
	--js ../closure-library/closure/goog/** \
	--compilation_level ADVANCED_OPTIMIZATIONS \
	--angular_pass \
	--generate_exports \
	--externs contrib/externs/angular-1.3.js \
	--externs contrib/externs/angular-material.js

